import { useState, useEffect } from 'react';

/**
 * A custom hook for managing local storage in React.
 * @param key The key to store the value in localStorage.
 * @param initialValue The initial value to set if the key doesn't exist.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Get the current value from local storage or use the initial value.
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Update local storage whenever the state changes.
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  // Return the value and a setter function.
  const setValue = (value: T | ((val: T) => T)) => {
    setStoredValue((prevValue) =>
      //@ts-ignore
      typeof value === 'function' ? value(prevValue) : value
    );
  };

  return [storedValue, setValue] as const;
}
