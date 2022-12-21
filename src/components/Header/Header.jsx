import { NavLink } from 'react-router-dom';
import logo from '../../assets/svg/kasa-logo-header.svg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div id="header" className={styles.header}>
      <div id="logo">
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
