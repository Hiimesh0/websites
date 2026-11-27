import { useState, useCallback } from 'react';
import { en } from '../data/translations/en';
import { gu } from '../data/translations/gu';
import { hi } from '../data/translations/hi';
import type { Translations } from '../data/translations/en';

export type LangCode = 'en' | 'gu' | 'hi';

const LANG_MAP: Record<LangCode, Translations> = { en, gu, hi };

export interface LangOption {
  code: LangCode;
  label: string;
  flag: string;
  nativeLabel: string;
}

export const LANG_OPTIONS: LangOption[] = [
  { code: 'en', label: 'English', flag: '🇬🇧', nativeLabel: 'English' },
  { code: 'gu', label: 'Gujarati', flag: '🇮🇳', nativeLabel: 'ગુજરાતી' },
  { code: 'hi', label: 'Hindi', flag: '🇮🇳', nativeLabel: 'हिंदी' },
];

export function useLanguage() {
  const [lang, setLang] = useState<LangCode>('en');
  const t = LANG_MAP[lang];

  const switchLang = useCallback((code: LangCode) => {
    setLang(code);
  }, []);

  return { lang, t, switchLang, LANG_OPTIONS };
}
