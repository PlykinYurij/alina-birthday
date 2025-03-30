export const extractClasses = (obj: Record<string, boolean>): string => {
  return Object.entries(obj)
    .reduce((acc: string[], [key, value]) => {
      if (value) {
        acc.push(key);
      }

      return acc;
    }, [])
    .join(' ');
}