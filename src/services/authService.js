import jwtDecode from "jwt-decode";
import http from "./httpService";
const tokenKey = "token";
const deviseKey = "devise";

http.setJwt(getJwt());

export async function login(cin, password) {
  const {
    data: { token },
  } = await http.post("/login", { cin, password });

  localStorage.setItem(tokenKey, token);
  localStorage.setItem(deviseKey, "web");
  http.setJwt(getJwt());
}

export async function Dest(Num_Carte, passCode) {
  const {
    data: { token },
  } = await http.post("/distLogin", { Num_Carte, passCode });

  localStorage.setItem(tokenKey, token);
  localStorage.setItem(deviseKey, "dest");
  http.setJwt(getJwt());
}

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(deviseKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getDevise() {
  return localStorage.getItem(deviseKey);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  getJwt,
  getCurrentUser,
  Dest,
  getDevise,
};
