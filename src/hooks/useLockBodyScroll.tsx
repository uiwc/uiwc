import { useLayoutEffect } from 'react';

export function useLockBodyScroll(isActive = true) {
  // useLaoutEffect callback return type is "() => void" type
  useLayoutEffect((): (() => void) => {
    // Get original body overflow
    const originalStyle: string = window.getComputedStyle(document.body)
      .overflow;
    // Prevent scrolling on mount
    if (isActive) {
      document.body.style.overflow = 'hidden';
    }
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, [isActive]); // Empty array ensures effect is only run on mount and unmount
}
