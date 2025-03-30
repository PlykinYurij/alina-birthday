import { CalligraphicTitle, Text } from '../ui';
import styles from './FinalCard.module.scss'
export const FinalCard = () => {
  return (
    <div className={styles.wrapper}>
      <Text variant={'greyBlue'} size={'md'}>
        С нетерпением <br/> жду вас!
      </Text>
      <CalligraphicTitle variant={'greyBlue'} size={'md'}>
        До встречи!
      </CalligraphicTitle>

    </div>
  );
};