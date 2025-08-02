// src/posts.js
import { graphAPI } from './graph.js';

/**
 * Fetches recent posts from a Facebook Page.
 * @param {string} pageId - The Facebook Page ID.
 * @param {string} pageAccessToken - Page access token with `pages_read_engagement` permission.
 * @param {number} [limit=10] - Maximum number of posts to fetch.
 * @param {string} [fields] - Optional comma-separated list of fields.
 * @returns {Promise<object>} - Facebook Graph API response containing posts.
 */
export async function getPagePosts(
  pageId,
  pageAccessToken,
  limit = 10,
  fields = 'id,message,created_time,full_picture,attachments{media},shares,likes.summary(true),comments.summary(true)'
) {
  try {
    return await graphAPI(`${pageId}/posts`, pageAccessToken, 'GET', {
      fields,
      limit,
    });
  } catch (err) {
    throw new Error(`Failed to fetch posts for page ${pageId}: ${err.message}`);
  }
}
