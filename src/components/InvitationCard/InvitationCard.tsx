import styles from './InvitationCard.module.scss';
import { CalligraphicTitle, Text } from '../ui';
import { AnimationText } from '../AnimationText';

export const InvitationCard = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={[styles.cell, styles.firstCell].join(' ')}>
          <AnimationText from={'top'}>
            <CalligraphicTitle>Дорогие друзья!</CalligraphicTitle>
          </AnimationText>
          <AnimationText from={'right'}>
            <Text size={'md'}>Приглашаю вас провести этот день вместе</Text>
          </AnimationText>
        </div>
        <div className={[styles.cell, styles.secondCell].join(' ')}>
          <hr className={styles.hr} />
          <AnimationText from={'bottom'}>
            <Text>за городом</Text>
          </AnimationText>
          <hr className={styles.hr} />
        </div>
        <AnimationText from={'right'}>
          <Text
            size={'md'}
            className={[styles.cell, styles.lastCell].join(' ')}
          >
            И весело отпраздновать мой 27&#8209;й день рождения
          </Text>
        </AnimationText>
      </div>
    </section>
  );
};
