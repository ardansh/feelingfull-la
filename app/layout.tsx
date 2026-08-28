import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
