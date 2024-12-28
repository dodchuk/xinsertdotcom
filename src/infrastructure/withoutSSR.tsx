import React from 'react';
import dynamic from 'next/dynamic';

const withoutSSR = (Component: React.FunctionComponent) => dynamic(
    () => Promise.resolve(Component),
    { ssr: false },
);

export default withoutSSR;
