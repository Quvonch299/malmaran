import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

const geist_mono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata = {
  title: "Malmaran - Aromatic Products",
  description: "Natural aromatic candles and products from Malmaran",
  icons: {
    icon: '/icon/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
