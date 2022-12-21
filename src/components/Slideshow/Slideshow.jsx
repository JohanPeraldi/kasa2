import React, { useState } from 'react';
import PropTypes from 'prop-types';
import chevronLeft from '../../assets/svg/chevron-left.svg';
import chevronRight from '../../assets/svg/chevron-right.svg';
import styles from './Slideshow.module.css';

export default function Slideshow(props) {
  const [index, setIndex] = useState(0);
  const pictures = props.pictures;

  function slideBack() {
    const nextIndex = index - 1;
    nextIndex < 0 ? setIndex(pictures.length - 1) : setIndex(nextIndex);
  }

  function slideForth() {
    setIndex((index + 1) % pictures.length);
  }

  return (
    pictures.length > 0 && (
      <div className={styles.wrapper}>
        {pictures.length > 1 && (
          <img
            src={chevronLeft}
            className={`${styles.chevron} ${styles['chevron-left']}`}
            alt=""
            onClick={slideBack}
          />
        )}
        <img
          src={pictures[index]}
          className={styles.picture}
          alt={props.title}
        />
        {pictures.length > 1 && (
          <>
            <span className={styles.counter}>
              {index + 1}/{pictures.length}
            </span>
            <img
              src={chevronRight}
              className={`${styles.chevron} ${styles['chevron-right']}`}
              alt=""
              onClick={slideForth}
            />
          </>
        )}
      </div>
    )
  );
}

Slideshow.propTypes = {
  pictures: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
