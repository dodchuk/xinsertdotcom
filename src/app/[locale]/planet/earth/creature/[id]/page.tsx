import React from 'react';
import ModelViewer from '@/ui/ModelViewer';
import layoutStyles from "@/ui/Pages/Layout/layout.module.scss";
import config from "@/ui/Pages/Project/config.json";
import initTranslations from '@/infrastructure/i18n/i18nInstance';
import { Trans } from 'react-i18next/TransWithoutContext'
import styles from '@/ui/Pages/Project/project.module.scss';
import cn from "classnames";

export default async function Page({ params: { locale, id: activeModel } }) {
  const i18nNamespaces = [`${ activeModel }`];
  const { t } = await initTranslations(locale, i18nNamespaces);

  const ModelItem = config[activeModel];
  const ModelIndex = String((ModelItem?.index)).padStart(2, '0');

  return (
    <div className={ layoutStyles.contentGapContainer }>
    <div className={ styles.sample }>
      <div className={ styles.content }>
        <span className={ styles.count }>{ ModelIndex }</span>
        <h2 className={ layoutStyles.pageTitle }>{ t('title') }</h2>
        <Trans i18nKey="description" components={ { b: <b/> } } />
      </div>
      <div className={ styles.demo }>
        <ModelViewer activeModel={ activeModel }/>
      </div>
    </div>
    </div>
  );
};
