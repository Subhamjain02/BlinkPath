import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import Card from "./Card/Card";

const CardCarousel = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#1D1C1B]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card cardNum = {card.num} cardTitle = {card.title} cardText = {card.text}/>

          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CardCarousel;

const cards = [
  {
    num: "01",
    title: "AI UX",
    text: "AI-driven experiences that help users work smarter, faster, and with confidence. Whether AI is the product or just powering part of it, what matters most is how it feels to use—and whether people come back to it.",
  },
  {
    num: "01",
    title: "AI UX",
    text: "AI-driven experiences that help users work smarter, faster, and with confidence. Whether AI is the product or just powering part of it, what matters most is how it feels to use—and whether people come back to it.",
  },
  {
    num: "01",
    title: "AI UX",
    text: "AI-driven experiences that help users work smarter, faster, and with confidence. Whether AI is the product or just powering part of it, what matters most is how it feels to use—and whether people come back to it.",
  },
  {
    num: "01",
    title: "AI UX",
    text: "AI-driven experiences that help users work smarter, faster, and with confidence. Whether AI is the product or just powering part of it, what matters most is how it feels to use—and whether people come back to it.",
  },
  {
    num: "01",
    title: "AI UX",
    text: "AI-driven experiences that help users work smarter, faster, and with confidence. Whether AI is the product or just powering part of it, what matters most is how it feels to use—and whether people come back to it.",
  },
  {
    num: "01",
    title: "AI UX",
    text: "AI-driven experiences that help users work smarter, faster, and with confidence. Whether AI is the product or just powering part of it, what matters most is how it feels to use—and whether people come back to it.",
  },
  {
    num: "01",
    title: "AI UX",
    text: "AI-driven experiences that help users work smarter, faster, and with confidence. Whether AI is the product or just powering part of it, what matters most is how it feels to use—and whether people come back to it.",
  },
  
];