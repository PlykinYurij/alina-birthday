import styles from './DressCodeCard.module.scss';
import { CalligraphicTitle, Text } from '../ui';

export const DressCodeCard = () => {
  return (
    <div className={styles.containerText}>
      <CalligraphicTitle variant={'greyBlue'}>Dress-code</CalligraphicTitle>
      <Text variant={'greyBlue'} size={'md'}>
        Наша вечеринка в стиле old money, прошу подобрать соответствующие образы
      </Text>
    </div>
  );
};
