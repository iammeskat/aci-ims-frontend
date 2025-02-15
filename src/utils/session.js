import {
	getCookie as getC,
	deleteCookie as removeC,
	setCookie as setC,
} from "cookies-next";
import { jwtDecode } from "jwt-decode";

export const setCookie = (key, value, expiration, { req, res } = {}) => {

	setC(key, value, {
		expires: expiration,
		path: "/",
		req,
		res,
	});
};

export const removeCookie = (key, { req, res } = {}) => {
	removeC(key, { req, res, domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN });
	removeC(key, { req, res });
};

export const getCookie = (key, { req, res } = {}) => {
	return getC(key, { req, res });
};

export const getCookieFromBrowser = (key) => {
	return getC(key);
};

export const setLocalStorage = (key, value) => {
	if (typeof window !== "undefined") {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const removeLocalStorage = (key) => {
	if (typeof window !== "undefined") {
		localStorage.removeItem(key);
	}
};


export const getLocalStorage = (key, convertToObject) => {
	try {
		if (typeof window !== "undefined") {
			return convertToObject
				? JSON.parse(localStorage.getItem(key))
				: localStorage.getItem(key);
		}
	} catch (error) {
		return convertToObject ? {} : "";
	}
};

export function parseJwt(token) {
	if (!token) return;

	const base64Url = token.split(".")[1];
	const base64 = base64Url.replace("-", "+").replace("_", "/");
	return JSON.parse(window.atob(base64));
}

export function decodeToken(token) {
	if (!token) return null;
	const decode = jwtDecode(token);
	return decode;
}

export const setUserCookies = (token, ctx) => {
	let userData = {};

	if (token) {
		userData = decodeToken(token);
		const exp = new Date(userData.exp * 1000);
		setCookie("accessToken", token, exp, ctx);
		if (!ctx) {
			setLocalStorage("user", userData);
			window.dispatchEvent(new Event("storage"));
		}
	}

	return userData;
};

export const removeUserCookies = () => {
	removeCookie("accessToken");
};