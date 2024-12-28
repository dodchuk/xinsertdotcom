'use client';

import { useState, useEffect } from 'react';
import i18n from 'i18next';
const useLocales = (activeModel: string | null) => {
  const [isLocalesLoaded, setIsLocalesLoaded] = useState(false);

  useEffect(() => {
    if (activeModel) {
      const loadLocale = async () => {
        try {
          const enLocale = await import(`@/ui/components/Project/${ activeModel }/locales/en/translation.json`);
          const uaLocale = await import(`@/ui/components/Project/${ activeModel }/locales/ua/translation.json`);
          i18n.addResources('en', activeModel, enLocale.default);
          i18n.addResources('ua', activeModel, uaLocale.default);
          setIsLocalesLoaded(true);
        } catch (error) {
          console.error('Failed to load locales:', error);
        }
      };

      loadLocale();
    }
  }, [activeModel]);

  return { isLocalesLoaded };
};

export default useLocales;
