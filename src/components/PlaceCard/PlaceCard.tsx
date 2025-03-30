import styles from './PlaceCard.module.scss';
import { Button, CalligraphicTitle, Text } from '../ui';
export const PlaceCard = () => {
  const handleClickPlace = () => {
    console.log(';click');
    window.open('https://yandex.ru/maps/-/CHR0YV3a', '_blank');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Text size={'md'}>
          Место проведения
        </Text>
        <CalligraphicTitle>Timofeevka Village</CalligraphicTitle>
        <Text size={'md'}>
          ул. Яблоневая д. 10А
        </Text>
        <Button size={'xl'} onClick={handleClickPlace}>
          Перейти на карту
        </Button>
      </div>
    </div>
  );
};
