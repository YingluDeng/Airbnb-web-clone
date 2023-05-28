import { Nunito } from "next/font/google";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/modal/Modal";

import './globals.css'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Website Clone',
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal title="Log in or sign up" isOpen/>
        <Navbar /> 
        {children}
        </body>
    </html>
  )
}
