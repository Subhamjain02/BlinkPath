import React, { useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { useAnimate, motion } from "framer-motion";

export const Modal = ({ open, setOpen, children }) => (
  <>
    {open && (
      <DragCloseDrawer open={open} setOpen={setOpen}>
        {children}
      </DragCloseDrawer>
    )}
  </>
);

const DragCloseDrawer = ({ setOpen, children }) => {
  const [scope, animate] = useAnimate();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);


  const refList = useRef([]);

  // Assign refs after mount to avoid null issue
  useEffect(() => {
    refList.current = [ref3.current, ref2.current, ref1.current].filter(Boolean);
  }, [ref1.current, ref2.current, ref3.current]);

    const handleClose = async () => {
    // Ensure refs exist
    const layers = [ref3.current, ref2.current, ref1.current].filter(Boolean);

    // Slide each layer off-screen using its own width
    await Promise.all(
        layers.map((el, i) => {
        const width = el.getBoundingClientRect().width;
        return animate(el, { x: width }, { duration: 0.4 + i * 0.1, ease: "easeInOut" });
        })
    );

    // Fade out backdrop after layers are gone
    await animate(scope.current, { opacity: 0 }, { duration: 0.3 });

    setOpen(false);
    };

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={handleClose}
      className="fixed inset-0 z-50 bg-neutral-950/70 z-[1100]"
    >
      {/* Layer 1 (backmost, widest) */}
      <motion.div
        ref={ref1}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 right-0 h-screen w-[40vw] bg-orange-600 rounded-l-3xl shadow-xl z-10000"
      />

      {/* Layer 2 (middle) */}
      <motion.div
        ref={ref2}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 right-0 h-screen w-[40vw] bg-neutral-900 rounded-l-3xl shadow-2xl z-20000"
      />

      {/* Layer 3 (frontmost, actual content) */}
      <motion.div
        ref={ref3}
        initial={{ x: "100%" }}
        animate={{ x: '0%' }}
        transition={{ duration: 0.7 }}
        className="absolute top-0 right-0 h-screen w-[40vw] bg-white rounded-l-3xl shadow-2xl z-30000 overflow-y-auto"
      >
        <div className="h-full p-6 pt-16 text-neutral-200">{children}</div>
      </motion.div>
    </motion.div>
  );
};
