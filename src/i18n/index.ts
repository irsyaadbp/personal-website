import en from './en.json';
import id from './id.json';

const translations = { en, id } as const;

export type Locale = 'en' | 'id';

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALES: Locale[] = ['en', 'id'];

export function getLangFromUrl(url: URL): Locale {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang === 'id') return 'id';
  return 'en';
}

export function t(lang: Locale, key: string, params?: Record<string, string | number>): string {
  const keys = key.split('.');
  let value: unknown = translations[lang];
  for (const k of keys) {
    if (value && typeof value === 'object' && k in (value as Record<string, unknown>)) {
      value = (value as Record<string, unknown>)[k];
    } else {
      value = undefined;
      break;
    }
  }

  let result = typeof value === 'string' ? value : key;

  if (params) {
    for (const [paramKey, paramValue] of Object.entries(params)) {
      result = result.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(paramValue));
    }
  }

  return result;
}

export function getLocalizedPath(path: string, lang: Locale): string {
  const cleanPath = path.replace(/^\/(en|id)(?=\/|$)/, '') || '/';
  if (lang === 'en') return cleanPath;
  if (cleanPath === '/') return '/id';
  return `/id${cleanPath}`;
}

export function getAlternateLocale(lang: Locale): Locale {
  return lang === 'en' ? 'id' : 'en';
}

export function stripLocale(path: string): string {
  return path.replace(/^\/(en|id)(?=\/|$)/, '') || '/';
}
