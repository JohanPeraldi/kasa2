import { Outlet } from 'react-router-dom';
import MainWrapper from './layout/MainWrapper/MainWrapper';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <MainWrapper>
        <Header />
        <Outlet />
      </MainWrapper>
      <Footer />
    </div>
  );
}

export default App;
