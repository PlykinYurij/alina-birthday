import styles from './DatetimeCard.module.scss';
import { CalligraphicTitle, Text } from '../ui';
import { AnimationText } from '../AnimationText';
export const DatetimeCard = () => {
  return (
    <div className={styles.wrapper}>
      <AnimationText>
      <Text variant={'greyBlue'} size={'xl'}>
        08 / 05 / 2025
      </Text>
      </AnimationText>
      <hr className={styles.hr} />
      <AnimationText from={'right'}>
      <CalligraphicTitle variant={'greyBlue'}>Сбор гостей</CalligraphicTitle>
      </AnimationText>
      <AnimationText>
      <Text variant={'greyBlue'} size={'xl'}>
        15:00
      </Text>
      </AnimationText>
    </div>
  );
};
