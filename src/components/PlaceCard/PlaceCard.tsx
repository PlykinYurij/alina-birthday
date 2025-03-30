import styles from './PlaceCard.module.scss';
import { Button, CalligraphicTitle, Text } from '../ui';
import { AnimationText } from '../AnimationText';

export const PlaceCard = () => {
  const handleClickPlace = () => {
    console.log(';click');
    window.open('https://yandex.ru/maps/-/CHR0YV3a', '_blank');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <AnimationText>
          <Text size={'md'}>Место проведения</Text>
        </AnimationText>
        <AnimationText from={'bottom'}>
          <CalligraphicTitle>Timofeevka Village</CalligraphicTitle>
        </AnimationText>
        <AnimationText>
          <Text size={'md'}>ул. Яблоневая д. 10А</Text>
        </AnimationText>
        <AnimationText from={'right'}>
          <Button size={'xl'} onClick={handleClickPlace}>
            Перейти на карту
          </Button>
        </AnimationText>
      </div>
    </div>
  );
};
