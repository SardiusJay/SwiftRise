import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwiftRise",
  description: "SwiftRise investment dashboard and auth screens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
