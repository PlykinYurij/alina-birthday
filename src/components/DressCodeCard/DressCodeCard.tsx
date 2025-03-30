import styles from './DressCodeCard.module.scss';
import { CalligraphicTitle, Text } from '../ui';
import { AnimationText } from '../AnimationText';

export const DressCodeCard = () => {
  return (
    <div className={styles.containerText}>
      <AnimationText from={'bottom'}>
        <CalligraphicTitle variant={'greyBlue'}>Dress-code</CalligraphicTitle>
      </AnimationText>
      <AnimationText>
        <Text variant={'greyBlue'} size={'md'}>
          Наша вечеринка пройдет в стиле old money, прошу подобрать
          соответствующие образы
        </Text>
      </AnimationText>
    </div>
  );
};
