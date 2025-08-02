// index.js

// Init SDK
import { initFacebookSdk } from "./src/initFacebookSDK.js";

// Auth
import { loginWithFacebook } from "./src/auth.js";

// Profile
import { getProfile as fetchUserProfile } from "./src/profile.js";

// Pages
import { getPages as fetchUserPages } from "./src/pages.js";

// Forms
import { getLeadForms as fetchPageLeadForms } from "./src/forms.js";

// Leads
import { getLeads as fetchFormLeads } from "./src/leads.js";

// Comments
import { getComments as fetchPostComments } from "./src/comments.js";

// Likes
import { getLikes as fetchPostLikes } from "./src/likes.js";

// Pictures
import { getPicture as fetchUserPicture } from "./src/pictures.js";

// Posts (and related functions)
import {
  getPagePosts as fetchPagePosts,
  getPostComments as fetchPostsComments,
  getPostLikes as fetchPostsLikes,
} from "./src/posts.js";

// Permission check (if implemented)
import { checkPermissions } from "./src/permissions.js";

export {
  initFacebookSdk,
  loginWithFacebook,
  fetchUserProfile,
  fetchUserPicture,
  fetchUserPages,
  fetchPagePosts,
  fetchPageLeadForms,
  fetchFormLeads,
  fetchPostComments,
  fetchPostLikes,
  fetchPostsComments,
  fetchPostsLikes,
  checkPermissions,
};
