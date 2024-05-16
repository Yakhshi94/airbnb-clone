import type { Metadata } from "next";
import { Nunito } from 'next/font/google';
import "./globals.css";
import { Navbar } from '@/app/components/navbar/Navbar';
import { Modal } from "./components/models/Modal";


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
        <Modal title="Hello World" isOpen actionLabel="My Button" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
