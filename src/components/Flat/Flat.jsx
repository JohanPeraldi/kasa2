import { useParams } from 'react-router-dom';
import Collapse from '../Collapse/Collapse';
import Slideshow from '../Slideshow/Slideshow';
import Tag from '../Tag/Tag';
import styles from './Flat.module.css';

export default function Flat() {
  const params = useParams();
  const data = [
    {
      title: 'Description',
      description:
        "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1 station de la gare de l'est (7 minutes à pied).",
    },
    {
      title: 'Équipements',
      description:
        'Climatisation,Wi-Fi,Cuisine,Espace de travail,Fer à repasser,Sèche-cheveux,Cintres',
    },
  ];

  return (
    <main className={styles.flat}>
      <Slideshow />
      <div className={styles['main-wrapper']}>
        <div className={styles['secondary-wrapper']}>
          <div className={styles['title-and-tags-wrapper']}>
            <h1 className={styles.title}>Page de l'appartement {params.id}</h1>
            <span className={styles.location}>Paris, Île-de-France</span>
            <div className={styles.tags}>
              <Tag text="Cosy" />
              <Tag text="Canal" />
              <Tag text="Paris 10" />
            </div>
          </div>
          <div className={styles['host-and-rating-wrapper']}>
            <div className={styles['host-wrapper']}>
              <span className={styles['host-name']}>
                Alexandre{' '}
                <span className={styles['host-family-name']}>Dumas</span>
              </span>
              <img
                src="https://via.placeholder.com/64"
                alt="Alexandre Dumas"
                className={styles.picture}
              ></img>
            </div>
            <div className={styles['rating-wrapper']}>
              <span className={styles.rating}>★ ★ ★ ★ ★</span>
            </div>
          </div>
        </div>
        <div className={styles['description-and-equipments']}>
          <Collapse title={data[0].title} description={data[0].description} />
          <Collapse
            list={true}
            title={data[1].title}
            description={data[1].description.split(',').map((item) => (
              <li>{item}</li>
            ))}
          />
        </div>
      </div>
    </main>
  );
}
