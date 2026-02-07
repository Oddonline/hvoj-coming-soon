import type { Metadata } from "next";
import { projectConfig } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  title: projectConfig.name,
  description: projectConfig.description,
  openGraph: {
    title: projectConfig.name,
    description: projectConfig.description,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
