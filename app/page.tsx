import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zieyaad Moses',
  description:
    'Fullstack Developer.',
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 smgap-8">
          <Image
            className="max-w-[120px] sm:max-w-[180px] dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <div className="text-3xl">+</div>
          <Image
            src="../assets/prismic.svg"
            alt="Prismic Logo"
            width={180}
            height={38}
            priority
            className="max-w-[140px] sm:max-w-[180px]"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl text-center">Website under development</h1>
      </main>
    </div>
  );
}
