import { Footer, Header, ThemeProvider } from '@/components';
import styles from './Layout.module.css';

const Layout = ({ children }: { children: React.ReactNode[] }) => {
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

export default Layout;
