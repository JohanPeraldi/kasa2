import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../Collapse/Collapse';
import Slideshow from '../Slideshow/Slideshow';
import Tag from '../Tag/Tag';
import styles from './Flat.module.css';

export default function Flat() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const id = useParams().id;

  let ad,
    title,
    location,
    tags,
    hostName,
    hostFirstName,
    hostLastName,
    picture,
    rating,
    ratingArray,
    off,
    offArray,
    description,
    equipments;

  useEffect(() => {
    setLoading(true);
    fetch('/data/ads.json')
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;
  ad = data.filter((ad) => ad.id === id)[0];
  console.log('ad: ', ad);
  title = ad.title;
  location = ad.location;
  tags = ad.tags;
  hostName = ad.host.name;
  hostFirstName = hostName.split(' ')[0];
  hostLastName = hostName.split(' ')[1];
  picture = ad.host.picture;
  rating = Number(ad.rating);
  ratingArray = new Array(rating).fill('★');
  off = 5 - rating;
  offArray = new Array(off).fill('★');
  description = ad.description;
  equipments = ad.equipments.join(',');

  return (
    <main className={styles.flat}>
      <Slideshow />
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
              <span className={styles.off}>{offArray.join(' ')}</span>
            </div>
          </div>
        </div>
        <div className={styles['description-and-equipments']}>
          <Collapse title="Description" description={description} />
          <Collapse
            list={true}
            title="Équipements"
            description={equipments.split(',').map((item) => (
              <li>{item}</li>
            ))}
          />
        </div>
      </div>
    </main>
  );
}
