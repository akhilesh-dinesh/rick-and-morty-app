const PAGE_KEY = 'rick-and-morty-current-page';

export const getStoredPage = (): number => {
  const stored = localStorage.getItem(PAGE_KEY);
  return stored ? parseInt(stored, 10) : 1;
};

export const setStoredPage = (page: number): void => {
  localStorage.setItem(PAGE_KEY, page.toString());
};