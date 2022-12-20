import styles from './Slideshow.module.css';

export default function Slideshow(props) {
  const pictures = props.pictures;

  return (
    <div className={styles.wrapper}>
      <img src={pictures[0]} alt="" />
    </div>
  );
}
