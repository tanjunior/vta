import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <Link
      href="/"
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
  );
}
