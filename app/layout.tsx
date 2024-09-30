import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nothing Factory",
  description: "a tiny band of builders up to nothing gud!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-ibm-mono antialiased" >
        <div className="mx-4 md:mx-8 max-w-xl mt-32">
          {children}
        </div>
      </body>
    </html >
  );
}
