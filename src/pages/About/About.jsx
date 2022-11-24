import styles from './About.module.css';

export default function About() {
  return (
    <div>
      <div id="banner" className={styles.banner}></div>
      <div id="values" className={styles.values}>
        <div>
          <div className={styles['subtitle-wrapper']}>
            <h2 className={styles.subtitle}>Fiabilité</h2>
            <svg
              width="24"
              height="15"
              viewBox="0 0 24 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z"
                fill="white"
              />
            </svg>
          </div>
          <p className={styles.description}>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </div>
        <div>
          <div className={styles['subtitle-wrapper']}>
            <h2 className={styles.subtitle}>Respect</h2>
            <svg
              width="24"
              height="15"
              viewBox="0 0 24 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z"
                fill="white"
              />
            </svg>
          </div>
          <p className={styles.description}>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
        <div>
          <div className={styles['subtitle-wrapper']}>
            <h2 className={styles.subtitle}>Service</h2>
            <svg
              width="24"
              height="15"
              viewBox="0 0 24 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z"
                fill="white"
              />
            </svg>
          </div>
          <p className={styles.description}>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </div>
        <div>
          <div className={styles['subtitle-wrapper']}>
            <h2 className={styles.subtitle}>Sécurité</h2>
            <svg
              width="24"
              height="15"
              viewBox="0 0 24 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z"
                fill="white"
              />
            </svg>
          </div>
          <p className={styles.description}>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div>
      </div>
    </div>
  );
}
