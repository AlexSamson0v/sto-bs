export const BASE_URL_AUTH = 'https://auth.nomoreparties.co';

const _responceProcessing = (res) => (res.ok) ? res.json() : Promise.reject(`Ошибка в Api: ${res.status} ${res.statusText}`);

function makeRequest(url, method, body, token) {
  const headers = { "Content-Type": "application/json" };
  const config = { method, headers };
  if (token !== undefined) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (body !== undefined) {
    config.body = JSON.stringify(body);
  }
  return fetch(`${BASE_URL_AUTH}${url}`, config).then((res) => {
    
    return _responceProcessing(res);
  });
}

export function register({ email, password }) {
  return makeRequest("/signup", "POST", { email, password });
}

export function authorize({ password, email }) {
  return makeRequest("/signin", "POST", { password, email });
}

export function getUserToken(jwt) {
  return makeRequest("/users/me", "GET", undefined, jwt);
}