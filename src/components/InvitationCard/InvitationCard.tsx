import styles from './InvitationCard.module.scss';
import { CalligraphicTitle, Text } from '../ui';

export const InvitationCard = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={[styles.cell, styles.firstCell].join(' ')}>
          <CalligraphicTitle>Дорогие друзья!</CalligraphicTitle>
          <Text size={'md'}>
            Приглашаю вас провести этот день вместе
          </Text>
        </div>
        <div className={[styles.cell, styles.secondCell].join(' ')}>
          <hr className={styles.hr} />
          <Text>за городом</Text>
          <hr className={styles.hr} />
        </div>
        <Text size={'md'} className={[styles.cell, styles.lastCell].join(' ')}>
          И весело отпраздновать мой 27&#8209;й день рождения
        </Text>
      </div>
    </section>
  );
};
