import { replaceAll } from './string';

/**
 * Get a random GUID
 * @param isTrimmed Remove '-'
 */
export function guid(isTrimmed: boolean = false): string {
  let currentDate = new Date().getTime();

  if (window.performance && typeof window.performance.now === 'function') {
    // Use high-precision timer if available
    currentDate += performance.now();
  }
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    (digit) => {
      const r = (currentDate + Math.random() * 16) % 16 | 0;
      currentDate = Math.floor(currentDate / 16);
      return (digit === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return isTrimmed ? replaceAll(uuid, '-', '') : uuid;
}
