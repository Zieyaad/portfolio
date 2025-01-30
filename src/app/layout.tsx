import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "@/components/Header";
import AnimatedBG from "@/components/AnimatedBG";
import Footer from "@/components/Footer";
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
      </Head>
      <body className="bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="relative z-20 pt-52 min-h-[2000px]">
            {/*<section>*/}
            {/*  <div className="container">*/}
            {/*    <div className="flex flex-col lg:flex-row gap-16 mt-32">*/}
            {/*      <div className="w-full max-w-[380px] flex justify-center items-end bg-violet-vortex pt-20 px-4 rounded-t-[60px] md:rounded-t-full">*/}
            {/*        <Image*/}
            {/*          src="/avatar-placeholder.png"*/}
            {/*          width={200}*/}
            {/*          height={200}*/}
            {/*          alt="placeholder"*/}
            {/*        />*/}
            {/*      </div>*/}
            {/*      <div className="w-full flex flex-col gap-6">*/}
            {/*        <h3 className="text-7xl font-bold text-text">*/}
            {/*          I'm a Product Designer working remotely from 6°C Dublin,*/}
            {/*          Ireland.*/}
            {/*        </h3>*/}
            {/*        <p className="text-3xl text-text">*/}
            {/*          Over the past 15 years, I've worked in various areas of*/}
            {/*          digital design, including front-end development, email,*/}
            {/*          marketing, and app UI/UX. I'm proud to have worn many*/}
            {/*          hats.*/}
            {/*        </p>*/}

            {/*        <p className="text-3xl text-text">*/}
            {/*          These days, I focus on leading design at GiveDirectly, a*/}
            {/*          nonprofit that lets donors send money directly to the*/}
            {/*          world's poorest households.*/}
            {/*        </p>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}

            {/*<section className="container mt-32">*/}
            {/*  <div className="grid grid-cols-12">*/}
            {/*    <div className="col-span-9 col-start-3 flex flex-col gap-6">*/}
            {/*      <h3 className="text-7xl font-bold text-text">*/}
            {/*        Let's collaborate if you're committed to sustainability,*/}
            {/*        education, equality, or carbon neutrality.{" "}*/}
            {/*      </h3>*/}
            {/*      <p className="text-3xl text-text">*/}
            {/*        I believe we should leave this Earth as good as or better*/}
            {/*        than we found it for future generations; my goal is to*/}
            {/*        contribute to those ideals in whatever way I can. If you*/}
            {/*        feel the same, I'd love to talk.*/}
            {/*      </p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}
            {children}
          </main>
          <AnimatedBG />
          <Footer />
        </ThemeProvider>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
