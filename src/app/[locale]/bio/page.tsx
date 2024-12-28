import React from 'react';
import cn from 'classnames';
import { Trans } from 'react-i18next/TransWithoutContext'
import initTranslations from '@/infrastructure/i18n/i18nInstance';
import styles from '@/ui/Pages/Bio/bio.module.scss';
import layoutStyles from "@/ui/Pages/Layout/layout.module.scss";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'X Insert / Дізнатися',
}

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function Page({ params: { locale } }: PageProps) {
  const i18nNamespaces = ['bio'];
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <div className={ cn(layoutStyles.contentContainer, layoutStyles.contentGapContainer) }>
      <div className={ styles.container }>
        <h2 className={ layoutStyles.pageTitle }>{ t('static_about_title') }</h2>
        <div className={ styles.twocolumns }>
          <div className={ styles.column }>
            <p>{ t('static_about_description_1') }</p>
          </div>
          <div className={ styles.column }>
            <p>
              <Trans i18nKey="static_about_description_2" components={ { b: <b/> } } />
            </p>
          </div>
        </div>
        <p>{ t('static_about_description_3') }</p>
      </div>
    </div>
  );
}
