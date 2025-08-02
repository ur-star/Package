// src/pages.js
import { graphAPI } from "./graph.js";

/**
 * Fetches Facebook Pages the user manages.
 * @param {string} accessToken - User's access token with `pages_show_list` permission.
 * @param {object} [params={}] - Optional Graph API query params.
 * @returns {Promise<object>} - List of pages and associated access tokens.
 */
export async function getPages(accessToken, params = {}) {
  try {
    return await graphAPI("me/accounts", accessToken, "GET", params);
  } catch (err) {
    throw new Error(`Failed to fetch managed pages: ${err.message}`);
  }
}
