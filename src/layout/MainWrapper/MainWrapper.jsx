import PropTypes from 'prop-types';
import styles from './MainWrapper.module.css';

export default function MainWrapper(props) {
  return <div className={styles['main-wrapper']}>{props.children}</div>;
}

MainWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};
