import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const defaultCustom = {
  // 位置は変えない（0 にする）
  y: 0,
  x: 0,
  // 初期は少し大きめ -> in-view で 1 に戻す
  scale: 1.2,
  blur: 0,
  once: true,
  amount: 0.2,
  duration: 0.8,
  delay: 0,
};

const ZoomOut = React.forwardRef(({ children, custom = {} }, forwardedRef) => {
  const localRef = useRef(null);
  const options = { ...defaultCustom, ...custom };
  const { scale, blur, duration, delay, once, amount } = options;

  const isInView = useInView(localRef, { once, amount });

  // 初期は scale: options.scale, opacity:0。
  // in-view になったら scale:1, opacity:1 にする（位置は触らない）
  return (
    <motion.div
      ref={(el) => {
        localRef.current = el;
        if (forwardedRef) forwardedRef.current = el;
      }}
      initial={{ opacity: 0, scale, filter: `blur(${blur}px)` }}
      animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
      transition={{ duration, delay }}
      style={{ transformOrigin: "center center", willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
});

ZoomOut.displayName = "ZoomOut";

export default ZoomOut;
