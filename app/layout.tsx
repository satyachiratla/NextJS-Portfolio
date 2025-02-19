import Navbar from "@/components/Navbar";
import "./globals.css";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Satya Chiratla",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className="dark:bg-gray-900 bg-slate-100"
        suppressHydrationWarning={true}
      >
        <Providers>
          <header>
            <Navbar />
          </header>
          {children}
          <footer id="contact">
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
