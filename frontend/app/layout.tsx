import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import RouteProvider from "./routes";

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Paraizo",
  description: "Site da clínica fisioterapêutica Paraizo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "white" }}
      >
        <RouteProvider/>
      </body>
    </html>
  );
}
