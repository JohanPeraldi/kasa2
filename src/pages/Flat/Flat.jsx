import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tag';
import styles from './Flat.module.css';

function formatEquipments(eq) {
  return eq.join(',');
}

export default function Flat() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const id = useParams().id;

  useEffect(() => {
    setLoading(true);
    fetch('/data/ads.json')
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) console.log(error);
  if (!data) return null;
  const ad = data.filter((ad) => ad.id === id)[0];
  console.log('ad: ', ad);

  if (ad) {
    const {
      description,
      equipments,
      host,
      location,
      pictures,
      rating,
      tags,
      title,
    } = ad;
    const hostName = host.name;
    const hostFirstName = hostName.split(' ')[0];
    const hostLastName = hostName.split(' ')[1];
    const picture = host.picture;
    const numberRating = Number(rating);
    const ratingArray = new Array(numberRating).fill('★');
    const numberOfExtinctStars = 5 - numberRating;
    const extinctStarsArray = new Array(numberOfExtinctStars).fill('★');
    const formattedEquipments = formatEquipments(equipments);

    return (
      <main className={styles.flat}>
        <Slideshow pictures={pictures} title={title} />
        <div className={styles['main-wrapper']}>
          <div className={styles['secondary-wrapper']}>
            <div className={styles['title-and-tags-wrapper']}>
              <h1 className={styles.title}>{title}</h1>
              <span className={styles.location}>{location}</span>
              <div className={styles.tags}>
                {tags.map((tag) => (
                  <Tag key={id + tag} text={tag} />
                ))}
              </div>
            </div>
            <div className={styles['host-and-rating-wrapper']}>
              <div className={styles['host-wrapper']}>
                <span className={styles['host-name']}>
                  {hostFirstName}
                  <span className={styles['host-family-name']}>
                    {hostLastName}
                  </span>
                </span>
                <img
                  src={picture}
                  alt={hostName}
                  className={styles.picture}
                ></img>
              </div>
              <div className={styles['rating-wrapper']}>
                <span className={styles.rating}>{ratingArray.join(' ')}</span>
                <span className={`${styles.rating} ${styles['extinct-stars']}`}>
                  {extinctStarsArray.join(' ')}
                </span>
              </div>
            </div>
          </div>
          <div className={styles['description-and-equipments']}>
            <Collapse title="Description" description={description} />
            <Collapse
              list={true}
              title="Équipements"
              description={formattedEquipments.split(',').map((item) => (
                <li key={item.toLowerCase()}>{item}</li>
              ))}
            />
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main className={styles['no-ads-wrapper']}>
        <p className={styles['no-ads-text']}>
          Aucun appartement ne correspond à cet identifiant
        </p>
      </main>
    );
  }
}
