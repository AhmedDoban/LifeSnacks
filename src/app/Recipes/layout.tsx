import type { Metadata } from "next";
import AOSProvider from "../../Components/AOS/AOS";

export const metadata: Metadata = {
  title: "Reciepes",
  description: "Sweet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AOSProvider>{children}</AOSProvider>;
}
