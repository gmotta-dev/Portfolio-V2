import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";

import { twMerge } from "tailwind-merge";

import Footer from "@/components/layoutResources/Footer/Footer";
import Nav from "@/components/Nav/Nav";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--Poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  console.log(process.env.NEXT_PUBLIC_CLOUDFRONT_URL)
  return (
    <html lang="en">
      <body className={twMerge("scroll-smooth scrollbar-thin scrollbar-thumb-purple-heart-300", inter.className, poppins.className)}>
        <Nav />
        {props.children}
        <Footer />
      </body>
    </html>
  );
}
