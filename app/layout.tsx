import type { Metadata } from "next";
import { Nunito } from 'next/font/google';
import "./globals.css";
import { Navbar } from '@/app/components/navbar/Navbar';
import { RegisterModal } from "./components/models/RegisterModal";


const nunito = Nunito({
  subsets: ['latin']
});


export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
