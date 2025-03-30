import styles from './DailySchedule.module.scss';
import { schedule } from './schedule.ts';
import { Fragment } from 'react';
import { CalligraphicTitle, Text } from '../ui';
import starIcon from '../../assets/img/star.svg';

export const DailySchedule = () => {
  return (
    <div className={styles.wrapper}>
      <CalligraphicTitle variant={'greyBlue'}>Программа дня</CalligraphicTitle>
      <div className={styles.table}>
        {schedule.map((item) => {
          if ('title' in item) {
            const { title, time, description } = item;
            return (
              <Fragment key={`${time}-${title}`}>
                <Text variant={'greyBlue'} size={'md'} fontWeight={'medium'}>
                  {time}
                </Text>
                <img
                  src={starIcon}
                  alt={'starIcon'}
                  className={styles.starIcon}
                />
                <div>
                  <Text
                    variant={'greyBlue'}
                    size={'md'}
                    fontWeight={'bold'}
                    className={styles.title}
                  >
                    {title}
                  </Text>
                  <Text variant={'greyBlue'} size={'sm'}>
                    {description}
                  </Text>
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
                {section}
              </CalligraphicTitle>
            );
          }
        })}
      </div>
    </div>
  );
};
