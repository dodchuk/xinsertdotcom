import React  from 'react';
import Link from 'next/link'
import styles from './switcher.module.scss';

export const Switcher = ({ iterableItems, t, locale }) => {
  const content = iterableItems.map((currentAsset) => {
      const { id: activeModel } = currentAsset;
      if (!activeModel) {
        return;
      }
      const ModelIndex = String(currentAsset?.index).padStart(2, '0');
      const ModelTitle = t(`${ activeModel }_title`);
      return (
          <div className={ styles.modelItem } key={ activeModel }>
            <Link href={ `${ locale }${ currentAsset?.linkToPage }` }>
              <div className={ styles.modelContent }>
                <div className={ styles.count }>{ ModelIndex }</div>
                { currentAsset.imgUrl && (
                  <div className={ styles.albumCover }>
                    <img
                      src={ currentAsset?.imgUrl }
                      alt={ ModelTitle }
                    />
                  </div>
                ) }
                <div className={ styles.footer }>
                  <div className={ styles.title }>{ ModelTitle }</div>
                </div>
              </div>
            </Link>
          </div>
      );
    });

  return (
    <div className={ styles.wrapper }>
      { content }
    </div>
  );
};

export default Switcher;
