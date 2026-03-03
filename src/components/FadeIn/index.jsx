import React from 'react';
import { motion } from 'framer-motion';

const defaultCustom = {
  y: 100,
  x: 0,
  scale: 1,
  blur: 0,
  once: true,
  amount: 0.2,
  duration: 0.8,
  delay: 0,
};

const config = (custom) => {
  const { y, x, scale, blur, once, amount, duration, delay } = { ...defaultCustom, ...custom };

  return {
    initial: {
      opacity: 0,
      y,
      x,
      scale,
      filter: `blur(${blur}px)`,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
    },
    viewport: {
      once,
      amount,
    },
    transition: {
      duration,
      delay,
    },
  };
};

const FadeIn = React.forwardRef(({ children, custom = {} }, forwardedRef) => (
  <motion.div {...config(custom)} ref={forwardedRef}>
    {children}
  </motion.div>
));

FadeIn.displayName = 'FadeIn';

export default FadeIn;
