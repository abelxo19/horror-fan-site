import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600"], // You can add more weights
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {
  title: "Haunt",
  description: "horror website to horror fans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <main>{children}</main>
        
      </body>
    </html>
  );
}
