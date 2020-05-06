import http from "./httpService";

export function emailExist(email) {
  return http.get(
    "https://app.verify-email.org/api/v1/gy5LmHbCCq9vFhV8Gdn8FNU7UtRcAsugIZbzAy5YL9cEKtCoCR/verify/" +
      email
  );
}
