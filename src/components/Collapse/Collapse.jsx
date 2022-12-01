import React, { useState } from 'react';
import styles from './Collapse.module.css';

export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <div className={styles.wrapper} onClick={() => setIsOpen(!isOpen)}>
        <h2 className={styles.title}>{props.title}</h2>
        <svg
          width="24"
          height="15"
          viewBox="0 0 24 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={!isOpen && styles.down}
        >
          <path
            d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z"
            fill="white"
          />
        </svg>
      </div>
      {isOpen && (
        <p className={styles.description} style={props.visible}>
          {props.description}
        </p>
      )}
    </article>
  );
}
