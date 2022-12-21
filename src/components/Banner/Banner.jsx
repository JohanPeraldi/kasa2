import PropTypes from 'prop-types';
import styles from './Banner.module.css';

export default function Banner(props) {
  return (
    <div
      id="banner"
      className={styles.banner}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className={styles.overlay}></div>
      {props.children}
    </div>
  );
}

Banner.propTypes = {
  children: PropTypes.object,
  image: PropTypes.string.isRequired,
};
