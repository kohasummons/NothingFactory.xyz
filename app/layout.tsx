import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "Nothing Factory",
  description: "Nothing Factory is a creative collective of builders & makers imagining audacious digital experiences and products!",
  openGraph: {
    title: "Nothing Factory",
    description: "Creative collective of builders & makers imagining audacious digital experiences and products!",
    url: "https://nothingfactory.xyz",
    siteName: "Nothing Factory",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Nothing Factory - those who ship!",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nothing Factory",
    description: "Nothing Factory is a creative collective of builders & makers imagining audacious digital experiences and products!",
    images: "/opengraph-image.png",
  },
  keywords: [
    "nothing factory",
    "creative collective",
    "builders",
    "makers",
    "digital experiences",
    "innovative",
    "web development",
    "design",
    "technology",
  ],
  publisher: "Nothing Factory",
  authors: [
    {
      name: "Joshua Omobola ",
      url: "https://koha.wtf",
    },
    {
      name: "Mercy Thaddeus",
      url: "https://mercythaddeus.xyz",
    },
  ],
  creator: "Nothing Factory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-ibm-mono antialiased" >
        <Providers>
          <div className="mx-4 md:mx-8 max-w-xl mt-32">
            {children}
          </div>
        </Providers>
      </body>
    </html >
  );
}
