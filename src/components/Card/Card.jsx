import styles from './Card.module.css';

export default function Card(props) {
  return (
    <article id="card" className={styles.card}>
      <h2 className={styles.title}>{props.title}</h2>
    </article>
  );
}
