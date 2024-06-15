import type { Metadata } from "next";

import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "@/Style/Normalize.css";
import "@/Style/Root.css";
import "@/Style/Style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import AOSProvider from "../Components/AOS/AOS";

export const metadata: Metadata = {
  title: "Life snacks",
  description: "Sweet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
