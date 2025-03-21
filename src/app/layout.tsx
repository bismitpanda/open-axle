import type { Metadata } from "next";
import { Fustat, Geist_Mono } from "next/font/google";
import "./globals.css";

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Incubator25 - Stable Foundations for Companies of the Future",
  description:
    "We provide the infrastructure, funding, and community to help innovative ideas thrive in today's digital economy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fustat.variable} ${geistMono.variable} antialiased font-sans`}
      suppressHydrationWarning
    >
      <body>
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
