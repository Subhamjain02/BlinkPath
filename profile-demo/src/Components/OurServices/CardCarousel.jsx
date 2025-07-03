import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import Card from "./Card/Card";
import SlideUpPanel from "./SlideUpPanel";

const CardCarousel = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // 0% → no shift, 100% → -95% (you can tweak the end value if needed)
  const x = useTransform(scrollYProgress, [0, 1], ["60%", "-70%"]);


  return (
    <section ref={targetRef} className="relative h-[1050vh] bg-[#1D1C1B]">

      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-7">
          {cards.map((card) => (
            <Card
              cardNum={card.num}
              cardTitle={card.title}
              cardText={card.text}
            />
          ))}
        </motion.div>
      </div>

      <SlideUpPanel
        scrollYProgress={scrollYProgress}
        start={0}
        end={1}
        className="bg-[#faebd7] flex items-center justify-center h-[100vh] rounded-t-[50px] sticky top-0"
      >
        {/* Now you can put anything here! */}
        <div className="p-8 text-centerx">
          <h2 className="text-3xl font-bold mb-4">Next Section</h2>
          <p>Add your custom content here.</p>
        </div>
      </SlideUpPanel>


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
    num: "02",
    title: "AI UX",
    text: "AI-driven experiences that help users work smarter, faster, and with confidence. Whether AI is the product or just powering part of it, what matters most is how it feels to use—and whether people come back to it.",
  },
  {
    num: "03",
    title: "AI UX",
    text: "AI-driven experiences that help users work smarter, faster, and with confidence. Whether AI is the product or just powering part of it, what matters most is how it feels to use—and whether people come back to it.",
  },
  {
    num: "04",
    title: "AI UX",
    text: "AI-driven experiences that help users work smarter, faster, and with confidence. Whether AI is the product or just powering part of it, what matters most is how it feels to use—and whether people come back to it.",
  },
  {
    num: "05",
    title: "AI UX",
    text: "AI-driven experiences that help users work smarter, faster, and with confidence. Whether AI is the product or just powering part of it, what matters most is how it feels to use—and whether people come back to it.",
  },
  {
    num: "06",
    title: "AI UX",
    text: "AI-driven experiences that help users work smarter, faster, and with confidence. Whether AI is the product or just powering part of it, what matters most is how it feels to use—and whether people come back to it.",
  },
  {
    num: "07",
    title: "AI UX",
    text: "AI-driven experiences that help users work smarter, faster, and with confidence. Whether AI is the product or just powering part of it, what matters most is how it feels to use—and whether people come back to it.",
  },
  
];