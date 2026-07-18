import React, { createContext, useContext, useState, useEffect } from 'react';
import { setupApiClient } from '../api/apiClient';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(() => localStorage.getItem('vahan_access_token'));
  
  // A queue of callbacks waiting for authentication
  const [authCallback, setAuthCallback] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    // If we have a token, we might want to decode it or fetch the user profile later.
    // For now, if the token is present, we consider them logged in.
    const handleAuthChange = () => {
      const token = localStorage.getItem('vahan_access_token');
      setAccessToken(token);
    };

    window.addEventListener("auth_changed", handleAuthChange);
    window.addEventListener("storage", handleAuthChange);
    
    // Inject getter and setter into apiClient
    setupApiClient(
      () => localStorage.getItem('vahan_access_token'),
      (token) => {
        if (!token) {
          localStorage.removeItem('vahan_access_token');
          setAccessToken(null);
          setUser(null);
        } else {
          localStorage.setItem('vahan_access_token', token);
          setAccessToken(token);
        }
        window.dispatchEvent(new Event("auth_changed"));
      }
    );

    return () => {
      window.removeEventListener("auth_changed", handleAuthChange);
      window.removeEventListener("storage", handleAuthChange);
    };
  }, []);

  const login = (token, userData) => {
    localStorage.setItem('vahan_access_token', token);
    setAccessToken(token);
    setUser(userData);
    window.dispatchEvent(new Event("auth_changed"));
    
    // Resume execution of pending action
    if (authCallback) {
      authCallback(token, userData);
      setAuthCallback(null);
    }
  };

  const logout = () => {
    localStorage.removeItem('vahan_access_token');
    setAccessToken(null);
    setUser(null);
    window.dispatchEvent(new Event("auth_changed"));
  };

  /**
   * Procedural hook to demand authentication before an action.
   * If logged in, fires callback immediately.
   * If not logged in, opens the login modal and fires callback upon success.
   */
  const requireAuth = (callback) => {
    if (accessToken) {
      callback(accessToken, user);
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
