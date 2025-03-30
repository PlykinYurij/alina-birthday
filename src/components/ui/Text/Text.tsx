import { HTMLAttributes } from 'react';
import { Size, Variant } from '../../../lib/types';
import styles from './Text.module.scss';
import { extractClasses } from '../../../lib/utils';

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  size?: Size;
  variant?: Variant;
};

export const Text = ({
  children,
  className,
  size = 'xl',
  variant = 'light',
  ...props
}: TextProps) => {
  const classes = {
    [styles.text]: true,
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
