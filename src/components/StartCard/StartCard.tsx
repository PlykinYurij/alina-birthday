import styles from './StartCard.module.scss';
import { CalligraphicTitle, Text } from '../ui';

export const StartCard = () => {
  return (
    <section className={styles.wrapper}>
      <Text className={styles.date} size={'xs'}>05 / 05 / 2025</Text>
      <div className={styles.content}>
        <Text className={styles.alina}>АЛИНА 27</Text>
        <CalligraphicTitle size={'md'}>Birthday Party</CalligraphicTitle>
      </div>
    </section>
  );
};
