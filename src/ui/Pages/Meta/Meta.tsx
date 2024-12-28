// @ts-nocheck

import Head from 'next/head';
import React from 'react';

type TProps = {
  title: string,
  description: string,
  image: string,
}

export function Meta({
  title,
  description,
  image,
}: TProps) {
  return (
    <Head>
      <title>{ title }</title>
      <meta
        name="description"
        content={ description }
      />
      <meta property="og:title" content={ title } />
      <meta property="og:site_name" content="X Insert" />
      <meta property="og:description" content={ description } />
      <meta name="image" property="og:image" content={ image } />

      <meta name="twitter:card" content={ 'summary_large_image' } />
      <meta property="twitter:description" content={ description } />
      <meta property="twitter:title" content={ title } />
      <meta name="twitter:image" content={ image } />
    </Head>
  );
}

