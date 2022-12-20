import chevronLeft from '../../assets/svg/chevron-left.svg';
import chevronRight from '../../assets/svg/chevron-right.svg';
import styles from './Slideshow.module.css';

export default function Slideshow(props) {
  const pictures = props.pictures;

  return (
    pictures.length > 0 && (
      <div className={styles.wrapper}>
        <img
          src={chevronLeft}
          className={`${styles.chevron} ${styles['chevron-left']}`}
          alt=""
        />
        <img src={pictures[0]} className={styles.picture} alt="" />
        <img
          src={chevronRight}
          className={`${styles.chevron} ${styles['chevron-right']}`}
          alt=""
        />
      </div>
    )
  );
}
