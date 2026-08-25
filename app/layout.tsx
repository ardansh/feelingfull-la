import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Warm, human type: a characterful serif for headings, a friendly sans for body.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://feelingfullla.org"),
  title: "FeelingFullLA | Reducing Food Waste in Los Angeles",
  description:
    "FeelingFullLA is a local charity reducing food waste and fighting hunger across Los Angeles and beyond.",
  openGraph: {
    title: "FeelingFullLA | Reducing Food Waste in Los Angeles",
    description:
      "A local charity reducing food waste and fighting hunger across Los Angeles and beyond.",
    url: "https://feelingfullla.org",
    siteName: "FeelingFullLA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
