import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Loue ton Food Truck",
  description: "Location de Food trucks",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={font.className}>
        <Header />

        <main className="flex min-h-screen flex-col items-center justify-between gap-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
