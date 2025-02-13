import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from 'next/font/google'
import "easymde/dist/easymde.min.css"

const workSans = Work_Sans({ 
  subsets: ['latin'],
  variable: '--font-work-sans',
})

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Dean Uata's directory of YC startups",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={workSans.className}>
      <body>{children}</body>
    </html>
  )
}
