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
        <div className="flex items-center justify-center gap-8">
          <Image
            className="dark:invert"
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
          />
        </div>
        <h1 className="text-3xl">Website under development</h1>
      </main>
    </div>
  );
}
