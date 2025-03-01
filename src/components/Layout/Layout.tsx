import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import styles from './Layout.module.css';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
