'use client';

import React from 'react';
import cn from 'classnames';
import styles from './languageSwitcher.module.scss';
import { useRouter } from 'next/navigation';
import { usePathname, useParams } from 'next/navigation';

const LanguageSwitcher = () => {
  const { locale } = useParams();
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = locale;

  const changeLanguage = (newLocale) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (currentPathname === '/' && !locale) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${ currentLocale }`, `/${ newLocale }`)
      );
    }

    router.refresh();
  };

  const buttonClassName = (active) => cn(styles.button, {
    [styles.active]: currentLocale === active,
  });
  return (
    <div className={ styles.lang }>
      <button
        className={ buttonClassName('ua') }
        onClick={ () => changeLanguage('ua') }
        title="Українська">
        <span>Українська</span>
      </button>
      <button
        className={ buttonClassName('en') }
        onClick={ () => changeLanguage('en') }
        title="English">
        <span>English</span>
      </button>
    </div>
  );
}

export default LanguageSwitcher;
