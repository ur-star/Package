/**
 * Prompts user to log in with Facebook.
 * @param {string} [scope='public_profile,email'] - Requested FB permissions.
 * @returns {Promise<FB.AuthResponse>} - FB authentication response.
 */
export function loginWithFacebook(scope = "public_profile,email") {
  return new Promise((resolve, reject) => {
    if (typeof FB === "undefined" || !FB.login) {
      return reject(
        new Error("Facebook SDK not loaded. Call initFacebookSdk() first.")
      );
    }

    FB.login(
      (response) => {
        if (response.authResponse) {
          resolve(response.authResponse); // Full auth object
        } else {
          reject(new Error("User cancelled login or did not authorize."));
        }
      },
      { scope }
    );
  });
}
