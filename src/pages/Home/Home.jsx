import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import image from '../../assets/jpg/seaside.jpg';
import styles from './Home.module.css';

export default function Home() {
  const [ads, setAds] = useState([]);

  const getData = async () => {
    const response = await fetch('/data/ads.json');
    const data = await response.json();
    setAds(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <Banner image={image}>
        <h1 className={styles.title}>
          <span>Chez vous,</span> partout et ailleurs
        </h1>
      </Banner>
      <div id="ads" className={styles.ads}>
        {ads.map((ad) => (
          <Link to={`appartements/${ad.id}`} key={ad.id}>
            <Card title={ad.title} />
          </Link>
        ))}
      </div>
    </main>
  );
}
