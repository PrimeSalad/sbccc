import { useEffect } from 'react';
import { HomePage } from '../presentation/pages/HomePage';

export function App() {
  useEffect(() => {
    if (!window.location.hash) return;

    window.requestAnimationFrame(() => {
      document.querySelector(window.location.hash)?.scrollIntoView();
    });
  }, []);

  return <HomePage />;
}
