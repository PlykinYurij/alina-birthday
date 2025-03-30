import styles from './WishesCard.module.scss';
import { CalligraphicTitle, Text } from '../ui';
import flowers from '../../assets/img/flowers.svg';
import { AnimationText } from '../AnimationText';
export const WishesCard = () => {
  return (
    <div className={styles.wrapper}>
      <AnimationText from={'bottom'}>
      <CalligraphicTitle variant={'greyBlue'}>Пожелания</CalligraphicTitle>
      </AnimationText>
      <img src={flowers} alt={'flowers'} className={styles.flowers} />

      <AnimationText from={'right'}>
      <Text size={'md'} variant={'greyBlue'}>
        Буду рада, если вместо цветов вы решите подарить бутылочку белого вина
        или другого алкоголя
      </Text>
      </AnimationText>
      <hr className={styles.hr} />
      <AnimationText>
      <Text size={'md'} variant={'greyBlue'}>
        Если хотите подарить ценный и нужный подарок, буду благодарна за вклад в
        бюджет грядущего путешествия
      </Text>
      </AnimationText>
    </div>
  );
};
