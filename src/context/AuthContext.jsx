import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { setupApiClient, apiClient } from '../api/apiClient';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(() => typeof window !== 'undefined' ? localStorage.getItem('vahan_access_token') : null);
  
  // A queue of callbacks waiting for authentication
  const [authCallback, setAuthCallback] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const fetchUser = useCallback(async (token) => {
    try {
      const res = await apiClient('/auth/me');
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setUser(json.data);
          return json.data;
        }
      }
    } catch (error) {
      console.error('Failed to fetch user:', error);
    }
    return null;
  }, []);

  useEffect(() => {
    // If we have a token, we might want to decode it or fetch the user profile later.
    // For now, if the token is present, we consider them logged in.
    const handleAuthChange = () => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('vahan_access_token');
        setAccessToken(token);
        if (token && !user) {
          fetchUser(token);
        } else if (!token) {
          setUser(null);
        }
      }
    };

    window.addEventListener("auth_changed", handleAuthChange);
    window.addEventListener("storage", handleAuthChange);
    
    // Initial fetch
    handleAuthChange();
    
    // Inject getter and setter into apiClient
    setupApiClient(
      () => typeof window !== 'undefined' ? localStorage.getItem('vahan_access_token') : null,
      (token) => {
        if (typeof window !== 'undefined') {
          if (!token) {
            localStorage.removeItem('vahan_access_token');
            setAccessToken(null);
            setUser(null);
          } else {
            localStorage.setItem('vahan_access_token', token);
            setAccessToken(token);
            fetchUser(token);
          }
        }
        window.dispatchEvent(new Event("auth_changed"));
      }
    );

    return () => {
      window.removeEventListener("auth_changed", handleAuthChange);
      window.removeEventListener("storage", handleAuthChange);
    };
  }, [fetchUser, user]);

  const login = async (token, userData) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('vahan_access_token', token);
      window.dispatchEvent(new Event("auth_changed"));
    }
    setAccessToken(token);
    
    // Always fetch latest profile from backend to get full relations (driver, worker, etc)
    let finalUser = userData;
    try {
      const res = await apiClient('/auth/me');
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          finalUser = json.data;
        }
      }
    } catch (e) {
      // fallback to passed user
    }
    
    setUser(finalUser);
    
    // Resume execution of pending action
    if (authCallback) {
      authCallback(token, finalUser);
      setAuthCallback(null);
    }
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('vahan_access_token');
      window.dispatchEvent(new Event("auth_changed"));
    }
    setAccessToken(null);
    setUser(null);
  };

  /**
   * Procedural hook to demand authentication before an action.
   * If logged in, fires callback immediately.
   * If not logged in, opens the login modal and fires callback upon success.
   */
  const requireAuth = (callback) => {
    if (accessToken && user) {
      callback(accessToken, user);
    } else if (accessToken && !user) {
      // Edge case: token exists but user is still fetching
      fetchUser(accessToken).then(fetchedUser => {
        if (fetchedUser) {
          callback(accessToken, fetchedUser);
        } else {
          setAuthCallback(() => callback);
          setIsLoginModalOpen(true);
        }
      });
    } else {
      setAuthCallback(() => callback);
      setIsLoginModalOpen(true);
    }
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    setAuthCallback(null); // Clear pending action on cancel
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, login, logout, requireAuth, isLoginModalOpen, setIsLoginModalOpen, closeLoginModal }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
