import styles from './Card.module.css';

export default function Card(props) {
  const articleStyle = {
    background: 'url(' + props.cover + ')',
  };

  return (
    <article id="card" className={styles.card} style={articleStyle}>
      <h2 className={styles.title}>{props.title}</h2>
    </article>
  );
}
