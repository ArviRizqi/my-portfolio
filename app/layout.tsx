import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arvi Rizqi Fadhila — Data Analyst & ML Engineer",
  description:
    "Fresh Informatics graduate specializing in machine learning, deep learning (CNN + ViT), and data products. Built autism detection, depression prediction, and plant recommendation systems — all deployed end-to-end.",
  keywords: [
    "Data Analyst",
    "Machine Learning Engineer",
    "Deep Learning",
    "Computer Vision",
    "CNN",
    "Vision Transformer",
    "Python",
    "TensorFlow",
    "Streamlit",
    "HuggingFace",
    "Arvi Rizqi Fadhila",
    "Portfolio",
  ],
  icons: {
    icon: "/icon-logo.png",
    shortcut: "/icon-logo.png",
    apple: "/icon-logo.png",
  },
  openGraph: {
    title: "Arvi Rizqi Fadhila — Data Analyst & ML Engineer",
    description:
      "End-to-end ML builder: from model training to live deployment. CNN+ViT for autism detection, depression prediction on HuggingFace, plant recommendation system.",
    url: "https://arvi-portfolio.vercel.app",
    siteName: "Arvi Rizqi Fadhila Portfolio",
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
        <title>Arvi Rizqi Fadhila — Data Analyst &amp; ML Engineer</title>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
