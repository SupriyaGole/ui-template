import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
