import { FlatNamespace, KeyPrefix, createInstance } from 'i18next';
import { FallbackNs } from 'react-i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig from './i18nConfig';

export default async function initTranslations(
  locale: string | string[],
  namespaces: string[] | string,
  i18nInstance?: any,
  resources?: any,
) {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend(
        (language, namespace) =>
          import(`@/infrastructure/i18n/translations/${ namespace }/locales/${ language }/translation.json`),
      ),
    );
  }

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0] || 'header',
    fallbackNS: namespaces[0] || 'header',
    ns: [...namespaces, 'header'],
    preload: resources ? [] : i18nConfig.locales,
    interpolation: {
      escapeValue: false,
    },
    localeDetectionPaths: [
      "^/$",
    ],
  });

  return i18nInstance;
}

export async function useTranslation<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined
>(lng: string | string[], ns?: Ns, options: { keyPrefix?: KPrefix } = {}) {
  const i18nextInstance = await initTranslations(
    lng,
    Array.isArray(ns) ? (ns as string[]) : (ns as string)
  );
  return {
    i18n: i18nextInstance,
    resources: i18nextInstance.services.resourceStore.data,
    t: i18nextInstance.t,
  };
}
