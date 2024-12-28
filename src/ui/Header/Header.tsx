import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import i18nConfig from '@/infrastructure/i18n/i18nConfig';
import initTranslations from '@/infrastructure/i18n/i18nInstance';
import Logo from '@/ui/Logo';
import LanguageSwitcher from '@/ui/Header/LanguageSwitcher';
import styles from './header.module.scss';
import MenuSvg from './menu.svg';
import LogoSimple from '@/ui/Logo/logoSimple.svg';

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
        <input type="checkbox" id="bigtasty" className={ styles.pullthetrigger } />
        <label htmlFor="bigtasty">
          <div className={ styles.cheeseburger }>
            <MenuSvg />
          </div>
        </label>
        <div className={ styles.navigationCollection }>
          <div className={ styles.navigationOverlay }>
            <label htmlFor="bigtasty">
              <div className={ styles.doublecheeseburger }>
                <LogoSimple />
              </div>
            </label>
            <div className={ styles.navigationOverlayContent }>
              <div className={ itemClassName('') }>
                {/* @ts-ignore */}
                <label htmlFor="bigtasty" onClick={"this.parentNode.click()"}>
                  <Link href={ `/${ locale }` }>{ t('menu_home') }</Link>
                </label>
              </div>
              <div className={ itemClassName('/bio') }>
                {/* @ts-ignore */}
                <label htmlFor="bigtasty" onClick={"this.parentNode.click()"}>
                  <Link href={ `/${ locale }/bio` }>{ t('menu_about') }</Link>
                </label>
              </div>
              <div className={ itemClassName('/link') }>
                {/* @ts-ignore */}
                <label htmlFor="bigtasty" onClick={"this.parentNode.click()"}>
                  <Link href={ `/${ locale }/link` }>{ t('menu_contact') }</Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
