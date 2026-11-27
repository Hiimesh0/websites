import { useState, useEffect, useCallback } from 'react';

export type PageId = 'home' | 'about' | 'products' | 'how-it-works' | 'contact';

export function useNavigation(defaultPage: PageId = 'home') {
  const [currentPage, setCurrentPage] = useState<PageId>(defaultPage);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'products', 'how-it-works', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = useCallback((page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return {
    currentPage,
    navigateTo
  };
}
