import { Link } from 'react-router-dom';
import MainWrapper from '../../layout/MainWrapper/MainWrapper';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './NotFound404.module.css';

export default function NotFound404() {
  return (
    <>
      <MainWrapper>
        <Header />
        <div className={styles.container}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>
            Oups! La page que vous demandez n'existe pas.
          </h2>
          <Link to="/" className={styles.link}>
            Retourner sur la page d'accueil
          </Link>
        </div>
      </MainWrapper>
      <Footer />
    </>
  );
}
