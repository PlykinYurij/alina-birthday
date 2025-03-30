import styles from './DailySchedule.module.scss';
import { schedule } from './schedule.ts';
import { Fragment } from 'react';
import { CalligraphicTitle, Text } from '../ui';
import starIcon from '../../assets/img/star.svg';
import { AnimationText } from '../AnimationText';

export const DailySchedule = () => {
  return (
    <div className={styles.wrapper}>
      <AnimationText>
        <CalligraphicTitle variant={'greyBlue'}>
          Программа дня
        </CalligraphicTitle>
      </AnimationText>
      <div className={styles.table}>
        {schedule.map((item, index) => {
          if ('title' in item) {
            const { title, time, description } = item;
            return (
              <Fragment key={`${time}-${title}`}>
                <AnimationText from={index % 2 === 0 ? 'left' : 'right'}>
                  <Text variant={'greyBlue'} size={'md'} fontWeight={'medium'}>
                    {time}
                  </Text>
                </AnimationText>
                <img
                  src={starIcon}
                  alt={'starIcon'}
                  className={styles.starIcon}
                />
                <div>
                  <AnimationText from={index % 2 === 0 ? 'right' : 'left'}>
                    <Text
                      variant={'greyBlue'}
                      size={'md'}
                      fontWeight={'bold'}
                      className={styles.title}
                    >
                      {title}
                    </Text>
                  </AnimationText>
                  <AnimationText from={index % 2 === 0 ? 'left' : 'right'}>
                    <Text variant={'greyBlue'} size={'sm'}>
                      {description}
                    </Text>
                  </AnimationText>
                </div>
              </Fragment>
            );
          }

          if ('section' in item) {
            const { section } = item;

            return (
              <CalligraphicTitle
                key={section}
                variant={'greyBlue'}
                className={styles.section}
              >
                <AnimationText>{section}</AnimationText>
              </CalligraphicTitle>
            );
          }
        })}
      </div>
    </div>
  );
};
