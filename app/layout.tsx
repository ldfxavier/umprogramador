import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucas Xavier | Desenvolvedor Full-Stack Sênior",
  description:
    "Desenvolvedor Full-Stack Sênior com mais de 14 anos de experiência em React, Node.js, PHP e muito mais.",
  generator: "v0.app",
  icons: {
    icon: "/programmer-favicon.png",
    apple: "/programmer-favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_inter.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
