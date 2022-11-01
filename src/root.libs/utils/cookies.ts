import { Cookies } from "react-cookie";
import type { CookieSetOptions } from "universal-cookie";

const cookie = new Cookies();

export const getCookie = <T>(name: string) => {
  return cookie.get<T>(name);
};

export const setCookie = (
  name: string,
  value: string,
  option?: CookieSetOptions
) => {
  return cookie.set(name, value, option);
};
