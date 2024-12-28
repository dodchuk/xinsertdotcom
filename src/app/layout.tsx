import React, { Suspense } from 'react';
import Bootstrap from '@/ui/Boostrap/Boostrap';
import Loading from "@/ui/Loading/Loading";
import BackgroundMouseMoveEffect from "@/ui/Effects/BackgroundMouseMoveEffect";

// Global Styles
import '@/ui/GlobalStyles/global.scss';

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
    <body>
      <Suspense fallback={ <Loading/> }>
        <Bootstrap children={ children } />
        <BackgroundMouseMoveEffect/>
      </Suspense>
    </body>
    </html>
  );
}
