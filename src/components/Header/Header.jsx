import { NavLink } from 'react-router-dom';
import logo from '../../assets/svg/kasa-logo-header.svg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles['logo-wrapper']}>
        <img src={logo} alt="Kasa logo" />
      </div>
      <nav>
        <ul className={styles.navlist}>
          <li>
            <NavLink
              to={`/`}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/a-propos`}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
