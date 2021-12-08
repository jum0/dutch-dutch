const getSessionStorage = (key: string) => {
  if (typeof window === 'undefined') return;

  try {
    const item = window.sessionStorage.getItem(key) || JSON.stringify(null);

    return JSON.parse(item);
  } catch (error) {
    console.log(error);
  }
};

const setSessionStorage = (key: string, value: unknown) => {
  if (typeof window === 'undefined') return;

  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

const removeSessionStorage = (key: string) => {
  if (typeof window === 'undefined') return;

  window.sessionStorage.removeItem(key);
};

export { getSessionStorage, setSessionStorage, removeSessionStorage };
