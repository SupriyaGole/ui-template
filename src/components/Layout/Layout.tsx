import Header from "../Header/Header";
import styles from "./Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
