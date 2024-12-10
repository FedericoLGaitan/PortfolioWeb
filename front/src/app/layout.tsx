import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const poppins = Poppins({
  subsets: ['latin'], // Idiomas compatibles
  weight: ['400', '700'],

});


export const metadata: Metadata = {
  title: "Flg",
  description: "a simple portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </head>
      <body
        className={`${poppins.className} ${poppins.className} antialiased`}
      >
        <Navbar/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
