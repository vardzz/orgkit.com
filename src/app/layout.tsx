import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OrgKit — The Operating System for Student Organizations",
  description:
    "Organize. Collaborate. Lead. OrgKit replaces messy spreadsheets, lost GCash dues receipts, and paper attendance with an all-in-one modern campus workspace.",
  keywords: [
    "student organization",
    "campus leadership",
    "dues management",
    "QR attendance",
    "officer handover",
    "collegiate clubs",
    "OrgKit",
  ],
  authors: [{ name: "OrgKit Team" }],
  openGraph: {
    title: "OrgKit — The Operating System for Student Organizations",
    description:
      "Modern workspace engineered for university student organizations, collegiate societies, and youth non-profits. 3-minute setup, 100% mobile ready.",
    type: "website",
    url: "https://orgkit.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-base text-ink selection:bg-accent/15 selection:text-accent-strong">
        {children}
      </body>
    </html>
  );
}
