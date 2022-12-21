import logo from '../../assets/svg/kasa-logo-footer.svg';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div id="footer" className={styles.footer}>
      <img src={logo} alt="Kasa logo" />
      <p className={styles.copyright}>
        &copy; {year} Kasa. All rights reserved
      </p>
    </div>
  );
}
