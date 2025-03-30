import styles from './Contacts.module.scss';
import telegramIcon from '../../assets/img/telegram.svg';
import { CalligraphicTitle, Text } from '../ui';

export const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <CalligraphicTitle variant={'greyBlue'}>Контакты</CalligraphicTitle>
      <Text variant={'greyBlue'} size={'md'}>
        Лучший муж для меня и для всех "Бедный Юра"
      </Text>
      <a href={'https://t.me/plykin_13'} target={'_blank'}>
        <img src={telegramIcon} alt={'telegramIcon'} className={styles.telegramIcon}/>
      </a>
    </div>
  );
};
