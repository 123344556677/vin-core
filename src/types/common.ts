export const setLocalStorage = (key: string, value: any): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    try {
      localStorage.setItem(key, JSON.stringify(value)); // Convert value to a string
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
