import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import image from '../../assets/seaside.jpg';
import styles from './Home.module.css';

export default function Home() {
  const data = [
    {
      title: 'Appartement 1',
    },
    {
      title: 'Appartement 2',
    },
    {
      title: 'Appartement 3',
    },
    {
      title: 'Appartement 4',
    },
    {
      title: 'Appartement 5',
    },
    {
      title: 'Appartement 6',
    },
  ];

  return (
    <main>
      <Banner image={image}>
        <h1 className={styles.title}>
          <span>Chez vous,</span> partout et ailleurs
        </h1>
      </Banner>
      <div id="ads" className={styles.ads}>
        <Card title={data[0].title} />
        <Card title={data[1].title} />
        <Card title={data[2].title} />
        <Card title={data[3].title} />
        <Card title={data[4].title} />
        <Card title={data[5].title} />
      </div>
    </main>
  );
}
