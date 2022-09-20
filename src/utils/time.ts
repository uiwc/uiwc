export function convertMinutesToString(timeInMinutes: number): string {
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;

  return hours > 0
    ? `${hours} hr${minutes > 0 ? ` ${minutes} min` : ''}`
    : `${minutes} min`;
}
