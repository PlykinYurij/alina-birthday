import { HTMLAttributes } from 'react';
import styles from './CalligraphicTitle.module.scss';
import { extractClasses } from '../../../lib/utils';
import { TextProps } from '../Text/Text.tsx';

export type CalligraphicTitleProps = HTMLAttributes<HTMLParagraphElement> & TextProps;

export const CalligraphicTitle = ({
  children,
  className,
  size = 'xl',
  variant = 'light',
  ...props
}: CalligraphicTitleProps) => {
  const classes = {
    [styles.title]: true,
    [className ?? '']: !!className,
    [styles[size]]: !!size,
    [styles[variant]]: !!variant,
  };

  return (
    <p className={extractClasses(classes)} {...props}>
      {children}
    </p>
  );
};
