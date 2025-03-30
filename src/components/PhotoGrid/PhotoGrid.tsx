import styles from './PhotoGrid.module.scss';
import girl1 from '../../assets/img/photo-1.jpg';
import boy1 from '../../assets/img/photo-2.jpg';
import boy2 from '../../assets/img/photo-3.jpg';
import girl2 from '../../assets/img/photo-4.jpg';

export const PhotoGrid = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.photoGrid}>
        <img src={girl1} alt="Image 1" className={styles.photo1} />
        <img src={boy1} alt="Image 2" className={styles.photo2} />
        <img src={boy2} alt="Image 3" className={styles.photo3} />
        <img src={girl2} alt="Image 4" className={styles.photo4} />
      </div>
    </div>
  );
};
