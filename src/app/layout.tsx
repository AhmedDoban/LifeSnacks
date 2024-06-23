import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
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
const montserate = Montserrat({ subsets: ["latin"], weight: ["300", "500"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserate.className}>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
