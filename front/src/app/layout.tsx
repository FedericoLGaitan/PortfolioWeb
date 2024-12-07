import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";

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
      <body
        className={`${poppins.className} ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
