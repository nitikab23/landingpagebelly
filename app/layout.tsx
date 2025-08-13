import type React from "react"
import { DM_Serif_Display, Inter } from "next/font/google"
import "./globals.css"

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-dm-serif",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  title: "Belly Good — Confident, Happy Mealtimes",
  description:
    "Organic baby meals that keep their natural taste, nutrition, and joy — ready in seconds and designed to support real-life routines.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
