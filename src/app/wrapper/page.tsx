import React from "react";
import Image from "next/image";
import Link from "next/link";
import LinkTransition from "@/components/LinkTransition";

export default function page() {
  return (
    <LinkTransition
      href="/"
      transition="logo-wrapper"
    >
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert logo"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </LinkTransition>
  );
}
