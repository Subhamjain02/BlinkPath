import React, { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

export const ScrollVelocity = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) => {
  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = "",
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
  }) {
    const textStr = "isual Design → Design Systems → UX Research → V";

    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef
      ? { container: scrollContainerRef }
      : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400,
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      { clamp: false }
    );

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min, max, v) {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return "0px";
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef(1);
    const [arrowDeg, setArrowDeg] = useState(0);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
        setArrowDeg(180);
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
        setArrowDeg(0);
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    // const spans = [];
    // for (let i = 0; i < (numCopies ?? 1); i++) {
    //   spans.push(
    //     <span
    //       className={`flex-shrink-0 ${className}`}
    //       key={i}
    //       ref={i === 0 ? copyRef : null}
    //     >
    //      {`isual Design → Design Systems → UX Research → V`}
    //     </span>
    //   );
    // }
    const spans = Array.from({ length: numCopies }, (_, i) => (
   <span
     key={i}
     ref={i === 0 ? copyRef : null}
     className={`flex-shrink-0 ${className} inline-flex items-center`}
   >
     {textStr.split("→").map((chunk, idx, arr) => (
       <React.Fragment key={idx}>
         {chunk}
         {idx < arr.length - 1 && (
           <span
             className="inline-block transition-transform duration-300"
             style={{ transform: `rotate(${arrowDeg}deg)`, /*color: `#F8481C`*/ }}
           >
             {` \u00A0→\u00A0 `}
           </span>
         )}
       </React.Fragment>
     ))}
   </span>
 ));

    return (
      <div
        className={`${parallaxClassName} relative overflow-hidden min-h-fit`}
        style={parallaxStyle}
      >
        <motion.div
          className={`${scrollerClassName} min-h-[11vh] flex whitespace-nowrap text-center text-white font-sans text-[55px] font-[500] tracking-[-0.02em] drop-shadow md:text-[3.5rem] md:leading-[5rem]`}
          style={{ x, ...scrollerStyle }}
        >
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}&nbsp;
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;
