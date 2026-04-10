import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SonicWave Pro — Sound Redefined",
  description:
    "Experience premium wireless audio with SonicWave Pro. Precision-engineered 40mm drivers, adaptive noise cancellation, and 60-hour battery life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scrollbar-hidden antialiased">{children}</body>
    </html>
  );
}
