import styles from './WishesCard.module.scss'
import { CalligraphicTitle, Text } from '../ui';
import flowers from '../../assets/img/flowers.svg'
export const WishesCard = () => {
  return (
    <div className={styles.wrapper}>
      <CalligraphicTitle variant={'greyBlue'}>
        Пожелания
      </CalligraphicTitle>

      <img src={flowers} alt={'flowers'} className={styles.flowers} />

      <Text size={'md'} variant={'greyBlue'}>
        Буду рада, если вместо цветов вы решите подарить бутылочку белого вина или другого алкоголя
      </Text>
      <hr className={styles.hr}/>
      <Text size={'md'} variant={'greyBlue'}>
        Если хотите подарить ценный и нужный подарок, буду благодарна за вклад в бюджет грядущего путешествия
      </Text>
    </div>
  );
};