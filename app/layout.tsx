import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
const worksans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Light.ttf", 
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-worksans",
});

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Dean Uata's directory of YC startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${worksans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
