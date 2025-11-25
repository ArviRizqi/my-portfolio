import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio site",
  icons: {
    icon: "/icon-logo.png",
    shortcut: "/icon-logo.png",
    apple: "/icon-logo.png",
  },
  openGraph: {
    title: "Portfolio",
    description: "Personal portfolio site",
    url: "http://localhost:3000",
    siteName: "Portfolio",
    images: [],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title></title>
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
