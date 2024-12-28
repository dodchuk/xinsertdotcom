import React from 'react';
import { redirect } from 'next/navigation';
import WhatIsLoading from "@/ui/Loading/Loading";

export default function Page() {
  redirect('/ua/');

  return (
    <WhatIsLoading />
  );
}
