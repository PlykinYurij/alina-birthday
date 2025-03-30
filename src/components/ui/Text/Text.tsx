import { HTMLAttributes } from 'react';
import { Size, Variant, Weight } from '../../../lib/types';
import styles from './Text.module.scss';
import { extractClasses } from '../../../lib/utils';

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  size?: Size;
  variant?: Variant;
  fontWeight?: Weight
};

export const Text = ({
  children,
  className,
  size = 'xl',
  variant = 'light',
  fontWeight = 'normal',
  ...props
}: TextProps) => {
  const classes = {
    [styles.text]: true,
    [className ?? '']: !!className,
    [styles[size]]: !!size,
    [styles[variant]]: !!variant,
    [styles[fontWeight]]: !!fontWeight
  };

  return (
    <p className={extractClasses(classes)} {...props}>
      {children}
    </p>
  );
};
