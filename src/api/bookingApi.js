import { BASE_URL } from './authApi';
import { apiClient } from './apiClient';

export async function createBooking(bookingData) {
  const res = await apiClient(`${BASE_URL}/bookings`, {
    method: 'POST',
    body: JSON.stringify(bookingData),
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message || `Failed to create booking (${res.status})`);
  }
  return json.data; // { booking, ... }
}

export async function confirmBooking(bookingId) {
  const res = await apiClient(`${BASE_URL}/bookings/${bookingId}/confirm`, {
    method: 'PATCH',
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message || `Failed to confirm booking (${res.status})`);
  }
  return json.data;
}

export async function cancelBooking(bookingId, reason) {
  const res = await apiClient(`${BASE_URL}/bookings/${bookingId}/cancel`, {
    method: 'PATCH',
    body: JSON.stringify({ reason }),
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message || `Failed to cancel booking (${res.status})`);
  }
  return json.data;
}
