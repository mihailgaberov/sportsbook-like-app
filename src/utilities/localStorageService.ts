// Create a record
export const createRecord = (
  key: string,
  value: string
): { error?: string } | void => {
  if (!key || !value) {
    return { error: "Store to localStorage failed. Invalid key or value." };
  }
  localStorage.setItem(key, value);
};

// Read a record
export const readRecord = (key: string): string | null => {
  return localStorage.getItem(key);
};

// Update a record
export const updateRecord = (
  key: string,
  value: string
): { error?: string } | void => {
  if (!key || !value) {
    return { error: "Store to localStorage failed. Invalid key or value." };
  }
  localStorage.setItem(key, value);
};

// Delete a record
export const deleteRecord = (key: string): { error?: string } | void => {
  if (!key) {
    return { error: "Delete from localStorage failed. Invalid key." };
  }
  localStorage.removeItem(key);
};

// Clear all
export const clearAll = (): void => localStorage.clear();

// Check for stored items
export const hasStoredItems = (): boolean => localStorage.length > 0;

// Check for support
export const isLocalStorageSupported = (): boolean => !!window.localStorage;

// Store (create or update) record to local storage
export const storeToLocalStorage = (key: string, value: string): void => {
  if (isLocalStorageSupported()) {
    if (readRecord(key)) {
      updateRecord(key, value);
    } else {
      createRecord(key, value);
    }
  }
};

// Read all records that have ID starting with 'SEL_' from local storage
export const readAllFromStorage = () => {
  const values = [];
  const keys = Object.keys(localStorage);
  let i = keys.length;

  while (i--) {
    const item = localStorage.getItem(keys[i]);
    let parsedItem = null;

    try {
      parsedItem = item ? JSON.parse(item) : null;
    } catch (e) {
      console.log("error reading local storage", e);
    }

    if (parsedItem && parsedItem.id && parsedItem.id.startsWith("SEL_")) {
      values.push(localStorage.getItem(keys[i]));
    }
  }

  return values;
};
