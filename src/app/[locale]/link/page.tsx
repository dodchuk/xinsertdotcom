import React from "react";
import initTranslations from '@/infrastructure/i18n/i18nInstance';
import { Trans } from 'react-i18next/TransWithoutContext'
import layoutStyles from '@/ui/Pages/Layout/layout.module.scss';
import styles from '@/ui/Pages/Link/link.module.scss';
import { Metadata } from 'next';
import cn from "classnames";

export const metadata: Metadata = {
  title: 'X Insert / Зв\'язатися',
};

export default async function Page({ params: { locale } }) {
  const i18nNamespaces = ['link'];
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <div className={ cn(layoutStyles.contentContainer, layoutStyles.contentGapContainer) }>
      <div className={ styles.container }>
        <h2 className={ layoutStyles.pageTitle }>{ t('static_contact_title') }</h2>
        <div className={ styles.content }>
          <p>
            <Trans i18nKey="static_contact_description" components={ { b: <b/> } } />
          </p>
        </div>
      </div>
    </div>
  );
}
