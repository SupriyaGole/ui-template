import styles from "./Header.module.css";
import viteLogo from "/vite.svg";

const Header = () => {
  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div>
            <a href="/" className={styles.title}>
              <img src={viteLogo} className={styles.logo} alt="Vite logo" />
              <span>Vite</span>
            </a>
          </div>
          <div className={styles.content}>
            <div className={styles.contentBody}></div>
          </div>
        </div>
      </div>
      <div className={styles.divider}>
        <div className="divider-line"></div>
      </div>
    </header>
  );
};

export default Header;
