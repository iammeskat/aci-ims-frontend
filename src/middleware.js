import { NextResponse } from "next/server";

export const config = {
	matcher: [
		"/((?!api|_next/static|auth|_next/image|favicon.ico).*)",
	],
};


export default async function middleware(req) {
	const host = req.nextUrl.origin;
	const accessToken = req.cookies.get("accessToken");
	const isAuthenticated = Boolean(accessToken?.value);

	const isLoginPage = req.nextUrl.pathname === '/login';

	if (isAuthenticated && isLoginPage) {
		return NextResponse.redirect(host);
	} else if (!isAuthenticated && !isLoginPage) {
		return NextResponse.redirect(`${host}/login`);
	}

}