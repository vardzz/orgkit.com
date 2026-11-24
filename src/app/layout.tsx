import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://orgkit.com"),
  title: "OrgKit",
  description:
    "A better way to run your student org. Members, events, dues, and everything your team needs. All in one place.",
  icons: {
    icon: [
      { url: "/orgkit-logo.png", sizes: "any", type: "image/png" },
      { url: "/orgkit-logo.png", sizes: "any" },
    ],
    shortcut: "/orgkit-favicon.png",
    apple: "/orgkit-favicon.png",
  },
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
      "A better way to run your student org. Members, events, dues, and everything your team needs. All in one place.",
    type: "website",
    url: "https://orgkit.com",
    images: ["/orgkit-logo.png"],
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
      <head>
        <link rel="icon" href="/orgkit-favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/orgkit-favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-ink selection:bg-accent/15 selection:text-accent-strong overflow-x-clip">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
