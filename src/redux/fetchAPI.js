function buildRequestHeader(headers) {
  const token = window.cookies.get("token");
  return {
    "Content-Type": "application/json",
    // ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...headers,
  };
}

export default function send({ link, method = "GET", headers = {}, data }) {
  const options = {
    method: method,
    headers: buildRequestHeader(headers),
  };
  if (data) {
    if (method == "GET") {
      link = `${link}?${new URLSearchParams(data)}`;
    } else {
      options.body = JSON.stringify(data);
    }
  }
  return fetch(link, options);
}

export function get(options) {
  return send({ ...options, method: "GET" });
}

export function post(options) {
  return send({ ...options, method: "POST" });
}

export function put(options) {
  return send({ ...options, method: "PUT" });
}

export function remove(options) {
  return send({ ...options, method: "DELETE" });
}
