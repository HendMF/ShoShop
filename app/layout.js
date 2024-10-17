import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/header/Header";
import { BottomHeader } from "./components/header/BottomHeader";
import Footer from "./components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ShoSHop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <BottomHeader />
        {children}
        <Footer />

        {/* {children} */}
      </body>
    </html>
  );
}
