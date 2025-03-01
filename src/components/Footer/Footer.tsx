import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.message}>Released under the MIT License.</p>
        <p className={styles.message}>
          Copyright © 2025-present X Contributors
        </p>
      </div>
    </footer>
  );
};
