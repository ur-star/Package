export async function graphAPI(
  endpoint,
  accessToken,
  method = "GET",
  params = {},
  version = "v19.0"
) {
  const url = new URL(`https://graph.facebook.com/${version}/${endpoint}`);

  const isGet = method.toUpperCase() === "GET";
  if (isGet) {
    url.search = new URLSearchParams({
      access_token: accessToken,
      ...params,
    }).toString();
  }

  try {
    const response = await fetch(url.toString(), {
      method,
      headers: {
        ...(isGet
          ? {}
          : {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            }),
      },
      ...(isGet ? {} : { body: JSON.stringify(params) }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error?.message || `Graph API error (${response.status})`
      );
    }

    return data;
  } catch (err) {
    throw new Error(`Facebook Graph API request failed: ${err.message}`);
  }
}
