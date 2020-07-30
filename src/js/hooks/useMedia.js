import { useEffect, useState } from 'react';

export default function useMedia(queries, values, defaultValue) {
  const mediaQueryLists = queries.map(q => { return window.matchMedia(q) ; });
  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => { return mql.matches ; });
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };
  const [value, setValue] = useState(getValue);
  useEffect(
    () => {
      const handler = () => { return setValue(getValue) ; };
      mediaQueryLists.forEach(mql => { return mql.addListener(handler) ; });
      return () => { return mediaQueryLists.forEach(mql => { return mql.removeListener(handler); }); };
    },
  );
  return value;
}
