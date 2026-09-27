'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type FontSize = 'normal' | 'large' | 'xlarge';

interface FontSizeContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

const FontSizeContext = createContext<FontSizeContextType>({
  fontSize: 'normal',
  setFontSize: () => {},
});

export const useFontSize = () => useContext(FontSizeContext);

export default function FontSizeProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSize>('normal');

  useEffect(() => {
    const saved = localStorage.getItem('fontSize') as FontSize;
    if (saved && ['normal', 'large', 'xlarge'].includes(saved)) {
      setFontSize(saved);
    }
  }, []);

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    localStorage.setItem('fontSize', size);
    document.documentElement.classList.remove('font-size-normal', 'font-size-large', 'font-size-xlarge');
    document.documentElement.classList.add(`font-size-${size}`);
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}
