import styles from './MainWrapper.module.css';

export default function MainWrapper(props) {
  return <div className={styles['main-wrapper']}>{props.children}</div>;
}
