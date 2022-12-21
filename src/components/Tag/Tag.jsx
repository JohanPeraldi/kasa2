import PropTypes from 'prop-types';
import styles from './Tag.module.css';

export default function Tag(props) {
  return (
    <div className={styles.tag}>
      <span className={styles.text}>{props.text}</span>
    </div>
  );
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};
