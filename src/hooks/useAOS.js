import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function useAOS() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
    return () => AOS.refresh();
  }, []);
}
