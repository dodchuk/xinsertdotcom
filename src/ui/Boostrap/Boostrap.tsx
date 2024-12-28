'use client';

import React from 'react';
import cn from 'classnames';
import Header from "@/ui/Header";
import layoutStyles from '@/ui/Pages/Layout/layout.module.scss';
import { useParams, usePathname } from 'next/navigation';
import i18nConfig from "@/infrastructure/i18n/i18nConfig";

interface IProps {
  children: React.ReactNode;
}

const Bootstrap = ({ children }: IProps) => {
  const { locale } = useParams();
  const pathname = usePathname();

  if (!i18nConfig.locales.includes(locale as string)) {
    return children;
  }

  return (
    <div className={ cn(layoutStyles.page) }>
      <div className={ layoutStyles.sidebar }>
        <Header pathname={ pathname } locale={ locale } />
      </div>
      <div className={ layoutStyles.content }>
        { children }
      </div>
    </div>
  );
}

export default Bootstrap;
