"use client";

import { RevealFx } from "@once-ui-system/core";

export default function Template({ children }: { children: React.ReactNode }) {

  return (

    <RevealFx translateY="12" fillWidth horizontal="center">

      {children}

    </RevealFx>

  );

}
