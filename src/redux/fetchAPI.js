function buildRequestHeader(headers) {
  return {
    "Content-Type": "application/json",
    ...headers,
  };
}

function send(url, { method = "GET", headers = {}, data }) {
  return fetch(url, {
    method: method,
    headers: buildRequestHeader(headers),
    body: JSON.stringify(data),
  });
}
export default send;
