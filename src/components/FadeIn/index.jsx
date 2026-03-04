import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';

const Container = motion(Slot);

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
  const {
    y,
    x,
    scale,
    blur,
    once,
    amount,
    duration,
    delay,
    opacity,
    skewX = 0,   // ← 追加
  } = { ...defaultCustom, ...custom };

  return {
    initial: {
      opacity: 0,
      y,
      x,
      scale,
    },
    whileInView: {
      opacity: opacity !== undefined ? opacity : 1,
      y: 0,
      x: 0,
      scale: 1,
    },
    viewport: {
      once,
      amount,
    },
    transition: {
      duration,
      delay,
    },

    // ⭐ ここが超重要
    transformTemplate: ({ x, y, scale }) =>
      `skewX(${skewX}deg) translateX(${x}) translateY(${y}) scale(${scale})`,
  };
};
const FadeIn = React.forwardRef(({ children, custom }, forwardedRef) => (
  <Container {...config(custom)} ref={forwardedRef}>
    {React.Children.only(children)}
  </Container>
));

FadeIn.displayName = 'FadeIn';

export default FadeIn;