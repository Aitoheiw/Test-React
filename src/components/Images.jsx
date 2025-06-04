import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import arrowLeft from "../assets/arrow_left.png";
import arrowRigth from "../assets/arrow_right.png";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.png";
export default function Images() {
  const img = [slide1, slide2, slide3, slide4];
  const [indexActuel, setIndexActuel] = useState(0);
  const avancerImages = () => {
    setIndexActuel((i) => (i + 1) % img.length);
  };
  const reculerImages = () => {
    setIndexActuel((i) => (i - 1 + img.length) % img.length);
  };

  return (
    <div className="w-full relative">
      <img
        src={arrowLeft}
        alt=""
        className="absolute w-10 h-18 z-1 inset-y-[calc(50%-48px)] hover:scale-120 transition-all duration-300 ease-in-out"
        onClick={reculerImages}
      />
      <img
        src={arrowRigth}
        alt=""
        className="absolute w-10 h-18 z-1 inset-x-[calc(100%-48px)] inset-y-[calc(50%-48px)] hover:scale-120 transition-all duration-300 ease-in-out"
        onClick={avancerImages}
      />

      <img
        src={img[indexActuel]}
        alt=""
        className="w-full h-96 object-cover object-bottom "
      />
      <div className="absolute bottom-2 right-[calc(50%-16px)] text-zinc-50 bg-zinc-950 rounded-md p-2 select-none">
        <AnimatePresence mode="wait">
          <motion.span
            key={indexActuel}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {indexActuel + 1}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
