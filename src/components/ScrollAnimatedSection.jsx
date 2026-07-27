import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollAnimatedSection = ({ children, className = '', id }) => {
  const ref = useRef(null);

  // Track scroll progress of this section relative to viewport
  // "start end": when top of section enters bottom of viewport
  // "end start": when bottom of section leaves top of viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map progress to visual transitions:
  // - Entering (0.0 to 0.2): Opacity 0 -> 1, Scale 0.95 -> 1, Y 60 -> 0, Blur 12px -> 0px
  // - Focus (0.2 to 0.8): Fully clear, full scale, at default Y position
  // - Exiting (0.8 to 1.0): Opacity 1 -> 0, Scale 1 -> 0.95, Y 0 -> -60, Blur 0px -> 12px
  const rawOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const rawY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);
  const rawBlur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [12, 0, 0, 12]);

  // Spring physics smooth out sudden scroll speed changes
  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 22 });
  const scale = useSpring(rawScale, { stiffness: 100, damping: 22 });
  const y = useSpring(rawY, { stiffness: 100, damping: 22 });
  const smoothBlur = useSpring(rawBlur, { stiffness: 100, damping: 22 });
  const filter = useTransform(smoothBlur, (v) => `blur(${v}px)`);

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{
        opacity,
        scale,
        y,
        filter,
        willChange: 'transform, filter, opacity'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimatedSection;
