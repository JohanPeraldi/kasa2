import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <div id="banner" className={styles.banner}>
        <div className={styles.overlay}></div>
        <h1 className={styles.title}>
          <span>Chez vous,</span> partout et ailleurs
        </h1>
      </div>
      <div id="ads" className={styles.ads}>
        <div className={styles.ad}>Appartement 1</div>
        <div className={styles.ad}>Appartement 2</div>
        <div className={styles.ad}>Appartement 3</div>
        <div className={styles.ad}>Appartement 4</div>
        <div className={styles.ad}>Appartement 5</div>
        <div className={styles.ad}>Appartement 6</div>
      </div>
    </div>
  );
}
