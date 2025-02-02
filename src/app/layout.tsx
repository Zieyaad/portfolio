import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link
          rel="preload"
          href="/fonts/Acorn-Bold.woff2"
          crossOrigin="anonymous"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/Lato-Regular.woff2"
          crossOrigin="anonymous"
          as="font"
          type="font/woff2"
        />
      </Head>
      <body className="bg-background font-lato">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="relative z-20 pt-28 sm:pt-32 md:pt-40 lg:pt-52">
            {children}
          </main>
        </ThemeProvider>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
