// src/initFacebookSdk.js

let sdkLoadPromise = null;

/**
 * Initializes the Facebook SDK.
 * @param {string} appId - Your Facebook App ID.
 * @param {object} [options] - Optional settings.
 * @param {string} [options.version='v19.0'] - FB Graph API version.
 * @param {number} [options.timeoutMs=10000] - Timeout in milliseconds.
 * @returns {Promise<void>} Resolves when FB SDK is ready.
 */
export function initFacebookSdk(appId, options = {}) {
  if (sdkLoadPromise) return sdkLoadPromise;

  const { version = "v19.0", timeoutMs = 10000 } = options;

  sdkLoadPromise = new Promise((resolve, reject) => {
    if (window.FB && typeof window.FB.init === "function") {
      return resolve();
    }

    const timeout = setTimeout(() => {
      reject(new Error("Facebook SDK load timed out."));
    }, timeoutMs);

    window.fbAsyncInit = function () {
      try {
        FB.init({
          appId,
          cookie: true,
          xfbml: false,
          version,
        });
        clearTimeout(timeout);
        resolve();
      } catch (err) {
        clearTimeout(timeout);
        reject(err);
      }
    };

    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      script.async = true;
      script.onerror = () => {
        clearTimeout(timeout);
        reject(new Error("Failed to load Facebook SDK script."));
      };
      document.body.appendChild(script);
    }
  });

  return sdkLoadPromise;
}
