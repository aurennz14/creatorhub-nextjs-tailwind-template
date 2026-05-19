import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AlbertPortfolio | Premium Media Kit",
  description: "Amplify your influence and grow your brand with your exclusive digital portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
