import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-28 right-5 z-50 w-11 h-11 rounded-2xl bg-[#145B58] text-white shadow-lg flex items-center justify-center hover:bg-[#0E4340] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#145B58]/50"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};
