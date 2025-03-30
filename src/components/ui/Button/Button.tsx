import { Size } from '../../../lib/types';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import { extractClasses } from '../../../lib/utils';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Extract<Size, 'xl'>;
};

export const Button = ({
  size = 'xl',
  children,
  className,
  ...props
}: ButtonProps) => {
  const classes = {
    [styles.button]: true,
    [className ?? '']: !!className,
    [styles[size]]: !!size,
  };

  return (
    <button className={extractClasses(classes)} {...props}>
      {children}
    </button>
  );
};
