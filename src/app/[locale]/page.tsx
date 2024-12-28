import React from 'react';
import { Metadata } from 'next';
import styles from "@/ui/Pages/Home/home.module.scss";
import layoutStyles from '@/ui/Pages/Layout/layout.module.scss';
import Switcher from "@/ui/Pages/Home/Switcher";
import initTranslations from "@/infrastructure/i18n/i18nInstance";
import i18nConfig from "@/infrastructure/i18n/i18nConfig";
import config from "@/ui/Pages/Project/config.json";
import PageNotFound from "@/ui/Pages/PageNotFound";

export const metadata: Metadata = {
  title: 'X Insert',
};
const iterableItems = Array.from(Object.values(config));

export default async function Page({ params: { locale } }) {
  const i18nNamespaces = ['home'];
  const { t } = await initTranslations(locale, i18nNamespaces);

  if (!i18nConfig.locales.includes(locale)) {
    return (
      <PageNotFound/>
    );
  }

  return (
    <div className={ layoutStyles.contentContainer }>
      <div className={ styles.content }>
        <Switcher iterableItems={ iterableItems } t={ t } locale={ locale }/>
      </div>
    </div>
  );
}
