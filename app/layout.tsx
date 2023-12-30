import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";
import styles from "./home.module.css";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Next Git | Peter  Kudeláš",
  description: "Visualize your Github contributions in 3D Thank to Next.js, ThreeJS and React Three Fiber.",
  openGraph: {
    images: 'https://github3d.vercel.app/opengraph-image.jpg'
  }

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${styles.layout}`}>
        <Header/>
        <main>{children}
      <Toaster position="top-center" />
        </main>
        <Footer />
      </body>
    </html>
  );
}
