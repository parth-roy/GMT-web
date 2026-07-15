import { BASE_URL } from './authApi';

// Get token from localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem('vahan_access_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
};

export async function createBooking(bookingData) {
  const res = await fetch(`${BASE_URL}/bookings`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(bookingData),
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message || `Failed to create booking (${res.status})`);
  }
  return json.data; // { booking, ... }
}

export async function confirmBooking(bookingId) {
  const res = await fetch(`${BASE_URL}/bookings/${bookingId}/confirm`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message || `Failed to confirm booking (${res.status})`);
  }
  return json.data;
}

export async function cancelBooking(bookingId, reason) {
  const res = await fetch(`${BASE_URL}/bookings/${bookingId}/cancel`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: JSON.stringify({ reason }),
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message || `Failed to cancel booking (${res.status})`);
  }
  return json.data;
}
