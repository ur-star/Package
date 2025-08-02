// src/permissions.js
export async function hasPermissions(requiredPermissions = []) {
  return new Promise((resolve, reject) => {
    FB.api('/me/permissions', (response) => {
      if (!response || response.error) {
        return reject(new Error('Failed to fetch permissions.'));
      }

      const granted = response.data
        .filter((perm) => perm.status === 'granted')
        .map((perm) => perm.permission);

      const missing = requiredPermissions.filter((perm) => !granted.includes(perm));
      resolve({ granted, missing });
    });
  });
}
