import { useParams } from 'react-router-dom';
import styles from './Flat.module.css';

export default function Flat() {
  const params = useParams();
  console.log(params.id);

  return (
    <main>
      <h1 className={styles.title}>Page de l'appartement {params.id}</h1>
    </main>
  );
}
