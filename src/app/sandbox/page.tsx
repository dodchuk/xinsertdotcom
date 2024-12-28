import React from 'react';
import { Overlay } from 'src/ui/Sandbox';
import { Metadata } from 'next';
import withoutSSR from '@/infrastructure/withoutSSR'

export const metadata: Metadata = {
  title: 'X Insert / Sandbox',
}

const Page = () => {
  return (
      <Overlay />
  );
}


export default withoutSSR(Page);
