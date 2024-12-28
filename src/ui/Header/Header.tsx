import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import initTranslations from '@/infrastructure/i18n/i18nInstance';
import styles from './header.module.scss';
import Logo from '@/ui/Logo';
import LanguageSwitcher from '@/ui/Header/LanguageSwitcher';
import i18nConfig from '@/infrastructure/i18n/i18nConfig';

interface IProps {
  pathname: string | string[],
  locale: string | string[],
}

const Header = async ({ pathname = '', locale = i18nConfig.defaultLocale }: IProps) => {
  const i18nNamespaces = ['header'];
  const { t } = await initTranslations(locale, i18nNamespaces);
  const isActive = (href = '/') => pathname === `/${ locale }${ href }`;
  const itemClassName = (href = '/') => cn(styles.navigationItem,{ [styles.active]: isActive(href) });

  return (
    <div className={ styles.headerWrp }>
      <Logo locale={ locale } />
      <LanguageSwitcher />
      <div className={ styles.navigation }>
        <div className={ itemClassName('') }>
          <Link href={ `/${ locale }` }>{ t('menu_home') }</Link>
        </div>
        <div className={ itemClassName('/bio') }>
          <Link href={ `/${ locale }/bio` }>{ t('menu_about') }</Link>
        </div>
        <div className={ itemClassName('/link') }>
          <Link href={ `/${ locale }/link` }>{ t('menu_contact') }</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
