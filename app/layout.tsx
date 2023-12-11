import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food truck location",
  description: "Location de Food trucks",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />

        <main className="flex min-h-screen flex-col items-center justify-between gap-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
