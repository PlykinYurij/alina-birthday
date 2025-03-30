import { CalligraphicTitle, Text } from '../ui';
import styles from './FinalCard.module.scss';
import { AnimationText } from '../AnimationText';
export const FinalCard = () => {
  return (
    <div className={styles.wrapper}>
      <AnimationText>
        <Text variant={'greyBlue'} size={'md'}>
          С нетерпением <br /> жду вас!
        </Text>
      </AnimationText>
      <AnimationText from={'bottom'}>
        <CalligraphicTitle variant={'greyBlue'} size={'md'}>
          До встречи!
        </CalligraphicTitle>
      </AnimationText>
    </div>
  );
};
