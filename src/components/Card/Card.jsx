import PropTypes from 'prop-types';
import styles from './Card.module.css';

export default function Card(props) {
  const articleStyle = {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(' +
      props.cover +
      ')',
  };

  return (
    <article id="card" className={styles.card} style={articleStyle}>
      <h2 className={styles.title}>{props.title}</h2>
    </article>
  );
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
