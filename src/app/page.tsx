import LinkTransition from "@/components/LinkTransition";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-12">

        <div>
          <h1>Link wrapper (useViewTransition)</h1>
          <LinkTransition href="/wrapper" transition="logo-wrapper">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert logo"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </LinkTransition>
        </div>

        <div>
          <h1>Link (AutoViewTransitionsOnClick)</h1>
          <Link
            href="/link"
            style={{
              viewTransitionName: "logo-link"
            }}
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert logo"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </Link>
        </div>

      </div>
    </main>
  );
}
