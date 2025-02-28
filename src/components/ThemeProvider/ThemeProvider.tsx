import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

// Context API
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// ThemeProvider Component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const [theme, setTheme] = useState<'light' | 'dark'>(savedTheme || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook
export const useTheme = () => {
  console.log(useContext(ThemeContext), "------context")
  return useContext(ThemeContext);
};
