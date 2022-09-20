import { useState, useEffect, useMemo } from 'react';
import { breakpoints } from '../styles/grid';

const md = breakpoints['md'];
const lg = breakpoints['lg'];

export function useMatchMedia() {
  const mb = useMemo(() => matchMedia(`(max-width: ${md - 1}px)`), []);
  const tb = useMemo(
    () => matchMedia(`(min-width: ${md}px) and (max-width: ${lg - 1}px)`),
    []
  );
  const dk = useMemo(() => matchMedia(`(min-width: ${lg}px)`), []);

  const [isMobile, setIsMobile] = useState(() => mb.matches);
  const [isTablet, setIsTablet] = useState(() => tb.matches);
  const [isDesktop, setIsDesktop] = useState(() => dk.matches);

  useEffect(() => {
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mb.addEventListener('change', onChange);
    return () => mb.removeEventListener('change', onChange);
  }, [mb]);

  useEffect(() => {
    const onChange = (e: MediaQueryListEvent) => setIsTablet(e.matches);
    tb.addEventListener('change', onChange);
    return () => tb.removeEventListener('change', onChange);
  }, [tb]);

  useEffect(() => {
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    dk.addEventListener('change', onChange);
    return () => dk.removeEventListener('change', onChange);
  }, [dk]);

  return { isMobile, isTablet, isDesktop };
}
