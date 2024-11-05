export const API_URL = process.env.NEXT_PUBLIC_API_URL;
// export const API_URL = "http://localhost:3001";
const useSecureCookies =
  process.env.NEXT_PUBLIC_NEXTAUTH_URL.startsWith("https://");
const cookiePrefix = useSecureCookies ? "__Secure-" : "";
const hostName = new URL(process.env.NEXT_PUBLIC_NEXTAUTH_URL).hostname;
export const TOKEN_NAME = `${cookiePrefix}next-auth.session-token`;
