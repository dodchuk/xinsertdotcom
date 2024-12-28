import { useEffect, useState } from 'react';

export function useHasTouch() {
  const [hasTouch, setHasTouch] = useState(false);

  function checkTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator?.maxTouchPoints > 0
           // @ts-ignore
           || navigator?.msMaxTouchPoints > 0;
  }

  useEffect(() => {
    setHasTouch(checkTouch());
  }, []);

  return { hasTouch };
}
