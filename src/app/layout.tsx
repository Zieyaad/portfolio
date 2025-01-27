import "./globals.css";
import { DM_Sans } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "@/components/Header";
import AnimatedBG from "@/components/AnimatedBG";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "block",
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      {/*<body className="bg-[length:400%_400%] bg-gradient-to-br from-[#0B1437] via-[#1a237e] to-[#283593] animate-gradient flex items-center justify-center p-4 min-h-screen">*/}
      <body>
        <Header />
        <main className="relative z-10 pt-20 flex justify-center text-white">
          {children}
        </main>
        <AnimatedBG />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
