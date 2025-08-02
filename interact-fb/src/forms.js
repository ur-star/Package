// src/forms.js
import { graphAPI } from "./graph.js";

/**
 * Fetches lead generation forms for a Facebook Page.
 * @param {string} pageId - Facebook Page ID.
 * @param {string} accessToken - Page access token with `leads_retrieval` permission.
 * @param {object} [params={}] - Optional query parameters (e.g., fields).
 * @returns {Promise<object>} - Facebook response containing lead forms.
 */
export async function getLeadForms(pageId, accessToken, params = {}) {
  try {
    return await graphAPI(
      `${pageId}/leadgen_forms`,
      accessToken,
      "GET",
      params
    );
  } catch (err) {
    throw new Error(
      `Failed to fetch lead forms for page ${pageId}: ${err.message}`
    );
  }
}
