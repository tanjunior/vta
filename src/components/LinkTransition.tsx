"use client"

import Link, { LinkProps } from "next/link";
import React from "react";
import { useViewTransition } from "use-view-transitions/react";

export default function LinkTransition(
  props: LinkProps & { children?: React.ReactNode, viewTransitionName: string }
) {
  const { startViewTransition } = useViewTransition();
  return (
    <Link
      {...props}
      onClick={() => startViewTransition()}
      style={{
        viewTransitionName: props.viewTransitionName,
      }}
    />
  );
}
