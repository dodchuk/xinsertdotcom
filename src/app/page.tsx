import React from 'react';
import { permanentRedirect } from 'next/navigation';
import WhatIsLoading from "@/ui/Loading/Loading";

export default function Page() {
  permanentRedirect('/ua');

  return (
    <WhatIsLoading />
  );
}
