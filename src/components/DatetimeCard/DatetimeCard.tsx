import styles from './DatetimeCard.module.scss';
import { CalligraphicTitle, Text } from '../ui';
export const DatetimeCard = () => {
  return (
    <div className={styles.wrapper}>
      <Text variant={'greyBlue'} size={'xl'}>
        08 / 05 / 2025
      </Text>
      <hr className={styles.hr} />
      <CalligraphicTitle variant={'greyBlue'}>Сбор гостей</CalligraphicTitle>
      <Text variant={'greyBlue'} size={'xl'}>
        15:00
      </Text>
    </div>
  );
};
