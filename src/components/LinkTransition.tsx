"use client"

import Link, { LinkProps } from "next/link";
import React, { useEffect } from "react";
import { useViewTransition } from "use-view-transitions/react";

export default function LinkTransition(
  props: LinkProps & { children?: React.ReactNode, transition: string }
) {
  const { startViewTransition, transitionState } = useViewTransition();

  useEffect(() => {
    console.log(transitionState)
  }, [transitionState])
  
  return (
    <Link
      {...props}
      onClick={() => startViewTransition()}
      style={{
        viewTransitionName: props.transition,
      }}
    />
  );
}
