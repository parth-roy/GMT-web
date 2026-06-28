/**
 * pricingApi.js
 * Connects the vahan (customer web portal) to the real server pricing APIs.
 * Server base URL: http://139.59.60.77:5000/api/v1
 */

const BASE_URL = 'https://api.gomytruck.com/api/v1';

/**
 * GET /api/v1/pricing/vehicles
 * Returns all active vehicle types with baseFare, pricePerKm, capacity, ETA, imageUrl
 */
export async function fetchVehicles() {
  const res = await fetch(`${BASE_URL}/pricing/vehicles`);
  if (!res.ok) throw new Error(`Failed to fetch vehicles: ${res.status}`);
  const json = await res.json();
  if (!json.success) throw new Error(json.message || 'Failed to fetch vehicles');
  return json.data; // array of VehiclePricing
}

/**
 * POST /api/v1/pricing/estimate
 * Calculates a fare estimate given pickup + drop coordinates + vehicle type.
 *
 * @param {object} params
 * @param {number} params.pickupLat
 * @param {number} params.pickupLng
 * @param {number} params.dropLat
 * @param {number} params.dropLng
 * @param {string} params.vehicleType  e.g. "TRUCK", "2_WHEELER", "PACKERS"
 * @param {boolean} [params.hasLoadingService]
 * @param {boolean} [params.insuranceOpted]
 * @returns {Promise<FareEstimateResponse>}
 *
 * FareEstimateResponse shape:
 * {
 *   estimatedDistanceKm: number,
 *   estimatedDurationMinutes: number,
 *   baseFare: number,
 *   distanceFare: number,
 *   loadingCharge: number,
 *   insuranceCharge: number,
 *   totalFare: number,
 *   minFare: number,
 *   vehicle: VehiclePricing
 * }
 */
export async function fetchEstimate({ pickupLat, pickupLng, dropLat, dropLng, vehicleType, hasLoadingService = false, insuranceOpted = false }) {
  const res = await fetch(`${BASE_URL}/pricing/estimate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pickupLat, pickupLng, dropLat, dropLng, vehicleType, hasLoadingService, insuranceOpted }),
  });
  if (!res.ok) throw new Error(`Estimate request failed: ${res.status}`);
  const json = await res.json();
  if (!json.success) throw new Error(json.message || 'Failed to get estimate');
  return json.data; // FareEstimateResponse
}

/**
 * GET /api/v1/maps/autocomplete
 * Returns place predictions for a given input string.
 */
export async function fetchAutocomplete(input) {
  if (!input) return [];
  const res = await fetch(`${BASE_URL}/maps/autocomplete?input=${encodeURIComponent(input)}`);
  if (!res.ok) throw new Error(`Autocomplete failed: ${res.status}`);
  const json = await res.json();
  if (!json.success) throw new Error(json.message || 'Failed to fetch predictions');
  return json.data; // array of predictions { placeId, description, mainText, secondaryText }
}

/**
 * GET /api/v1/maps/place-details
 * Returns lat, lng, name, address for a placeId.
 */
export async function fetchPlaceDetails(placeId) {
  const res = await fetch(`${BASE_URL}/maps/place-details?placeId=${encodeURIComponent(placeId)}`);
  if (!res.ok) throw new Error(`Place details failed: ${res.status}`);
  const json = await res.json();
  if (!json.success) throw new Error(json.message || 'Failed to fetch place details');
  return json.data; // { lat, lng, name, address }
}

/**
 * Geocode an address string into { lat, lng } using the server's maps geocode API.
 * POST /api/v1/maps/geocode  or  GET /api/v1/maps/geocode?address=...
 * Falls back to a free Nominatim call if server doesn't respond.
 */
export async function geocodeAddress(address) {
  try {
    const url = `${BASE_URL}/maps/geocode?address=${encodeURIComponent(address)}`;
    const res = await fetch(url);
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        return { lat: json.data.lat, lng: json.data.lng };
      }
    }
  } catch (_) { /* fallthrough to Nominatim */ }

  // Fallback: OpenStreetMap Nominatim (free, no key needed)
  const nominatimUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;
  const res = await fetch(nominatimUrl, { headers: { 'Accept-Language': 'en' } });
  const results = await res.json();
  if (!results.length) throw new Error(`Could not locate address: "${address}"`);
  return { lat: parseFloat(results[0].lat), lng: parseFloat(results[0].lon) };
}

/**
 * Map from UI service label → server vehicleType enum value
 */
export const SERVICE_TO_VEHICLE_TYPE = {
  truck: 'MINI_TRUCK',
  bike: 'BIKE',
  movers: 'TATA_ACE',
};

/**
 * Hero background images per city — real landmark photos.
 * Same verified Wikipedia URLs used in CityCoverage.jsx, scaled to 1280px for hero quality.
 * Chennai uses the local file already in /public/cities/.
 */
export const CITY_HERO_IMAGES = {
  Kolkata:   "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Kolkata_maidan.jpg/1280px-Kolkata_maidan.jpg",
  Mumbai:    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Mumbai_Bandra-Worli_Sea_Link.jpg/1280px-Mumbai_Bandra-Worli_Sea_Link.jpg",
  Delhi:     "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Jama_Masjid_2011.jpg/1280px-Jama_Masjid_2011.jpg",
  Bengaluru: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/View_from_Visvesvaraya_Industrial_and_Technological_Museum_%282025%29_02.jpg/1280px-View_from_Visvesvaraya_Industrial_and_Technological_Museum_%282025%29_02.jpg",
  Hyderabad: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Downtown_hyderabad_drone.png/1280px-Downtown_hyderabad_drone.png",
  Chennai:   "/cities/Chennai.jpg",
  Pune:      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pune_West_skyline_-_March_2017.jpg/1280px-Pune_West_skyline_-_March_2017.jpg",
  Ahmedabad: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sabarmati_riverside.jpg/1280px-Sabarmati_riverside.jpg",
}

/**
 * Cities served by Parther Logistics.
 * Used by the city selector dropdown on TruckPage.
 */
export const SERVED_CITIES = [
  'Kolkata',
  'Mumbai',
  'Delhi',
  'Bengaluru',
  'Hyderabad',
  'Chennai',
  'Pune',
  'Ahmedabad',
];

/**
 * Detects the user's current city via:
 *   1. Browser Geolocation API → lat/lng
 *   2. Backend reverse-geocode → address string
 *   3. Extract city from Mapbox place_name format: "area, City, State, India"
 *
 * Falls back to "Kolkata" if permission denied or any step fails.
 *
 * @returns {Promise<string>} City name (matched against SERVED_CITIES if possible)
 */
export async function detectCurrentCity() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve('Kolkata');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res = await fetch(
            `${BASE_URL}/maps/reverse-geocode?lat=${coords.latitude}&lng=${coords.longitude}`
          );
          if (!res.ok) throw new Error('reverse-geocode failed');
          const json = await res.json();
          if (!json.success || !json.data?.address) throw new Error('no address');

          // Mapbox place_name: "Neighbourhood, City, State, India"
          // City is reliably the second-to-last comma-separated segment before "India"
          const parts = json.data.address.split(',').map((s) => s.trim());
          // Find the first part that matches a served city (case-insensitive)
          const matched = parts.find((p) =>
            SERVED_CITIES.some((c) => c.toLowerCase() === p.toLowerCase())
          );
          if (matched) {
            resolve(matched);
            return;
          }
          // Fallback: second segment often is the city in Mapbox format
          resolve(parts[1] || 'Kolkata');
        } catch {
          resolve('Kolkata');
        }
      },
      () => resolve('Kolkata'),   // permission denied or timeout
      { timeout: 6000, maximumAge: 300_000 }
    );
  });
}
