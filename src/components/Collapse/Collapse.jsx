import React, { useState } from 'react';
import chevronDown from '../../assets/svg/chevron-down.svg';
import chevronUp from '../../assets/svg/chevron-up.svg';
import styles from './Collapse.module.css';

export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <div className={styles.wrapper} onClick={() => setIsOpen(!isOpen)}>
        <h2 className={styles.title}>{props.title}</h2>
        <img src={isOpen ? chevronDown : chevronUp} alt="" />
      </div>
      {isOpen &&
        (props.list ? (
          <ul className={styles.description} style={props.visible}>
            {props.description}
          </ul>
        ) : (
          <p className={styles.description} style={props.visible}>
            {props.description}
          </p>
        ))}
    </article>
  );
}
