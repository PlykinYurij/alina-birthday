import { ReactNode, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

type AnimationTexProps = {
  from?: 'left' | 'right' | 'top' | 'bottom';
  children: ReactNode;
};

export const AnimationText = ({
  from = 'left',
  children,
}: AnimationTexProps) => {
  const refText = useRef(null);

  const isInView = useInView(refText, { once: true });

  const createVariants = (): Variants => {
    const variants = {
      hidden: { opacity: 0, x: 0, y: 0 },
      visible: { opacity: 1, x: 0, y: 0 },
    };

    if (from === 'left' || from === 'right') {
      variants.hidden.x = from === 'left' ? -50 : 50
    }

    if (from === 'top' || from === 'bottom') {
      variants.hidden.y = from === 'top' ? -50 : 50
    }

    return variants
  }

  return (
    <div style={{overflow: 'hidden'}}>
    <motion.span
      ref={refText}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={createVariants()}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {children}
    </motion.span>
    </div>
  );
};
