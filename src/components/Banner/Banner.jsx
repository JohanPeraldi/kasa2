import styles from './Banner.module.css';

export default function Banner(props) {
  return (
    <div id="banner" className={styles.banner}>
      <div className={styles.overlay}></div>
      {props.children}
    </div>
  );
}
