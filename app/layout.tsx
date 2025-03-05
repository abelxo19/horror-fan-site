import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600"], // You can add more weights
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {
  title: "Haunt - The Ultimate Horror Fan Site",
  description: "Explore the chilling world of horror with Haunt! A community-driven horror website for fans of spooky stories, horror movies, and supernatural tales. Created by Abel Atkelet.",
  keywords: "horror, horror movies, horror stories, scary tales, ghost stories, supernatural, thriller, horror fans",
  authors: [{ name: "Abel Atkelet", url: "https://horror-fan-site.vercel.app" }],
  
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
