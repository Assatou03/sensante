export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/patients/:path*", "/consultations/:path*", "/dashboard/:path*", "/profil/:path*"],
};