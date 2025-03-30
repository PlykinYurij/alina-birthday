import styles from './Contacts.module.scss';
import telegramIcon from '../../assets/img/telegram.svg';
import { CalligraphicTitle, Text } from '../ui';
import { AnimationText } from '../AnimationText';

export const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <AnimationText from={'top'}>
      <CalligraphicTitle variant={'greyBlue'}>Контакты</CalligraphicTitle>
      </AnimationText>
      <AnimationText from={'right'}>
      <Text variant={'greyBlue'} size={'md'}>
        Лучший муж для меня и "Бедный Юра" для всех
      </Text>
      </AnimationText>
      <a href={'https://t.me/plykin_13'} target={'_blank'}>
        <img src={telegramIcon} alt={'telegramIcon'} className={styles.telegramIcon}/>
      </a>
    </div>
  );
};
