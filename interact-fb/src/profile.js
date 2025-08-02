// src/profile.js
import { graphAPI } from "./graph.js";

/**
 * Fetches the current user's Facebook profile.
 * @param {string} accessToken - Facebook access token.
 * @param {string} [fields='id,name,email,picture'] - Comma-separated fields to request.
 * @returns {Promise<object>} - Facebook user profile data.
 */
export async function getProfile(
  accessToken,
  fields = "id,name,email,picture"
) {
  try {
    return await graphAPI("me", accessToken, "GET", { fields });
  } catch (err) {
    throw new Error(`Failed to fetch profile: ${err.message}`);
  }
}
