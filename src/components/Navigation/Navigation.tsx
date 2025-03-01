import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link to='/' className={styles.navLink}>
        Home
      </Link>
      <Link to='/about' className={styles.navLink}>
        About
      </Link>
      <Link to='/contact' className={styles.navLink}>
        Contact
      </Link>
    </nav>
  );
};
