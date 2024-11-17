import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

export default function FeaturedIn() {


  const h1Ref = useRef(null); // Reference to the H1 element

    const isInView = useInView(h1Ref, { once: true }); // Trigger animation once when in view





  const [isFlipped, setIsFlipped] = useState(false);

  const flipVariants = {
    front: {
      rotateY: 0,
    },
    back: {
      rotateY: 180,
    },
  };

  return (
    <section className="featured-in bg-featured-bg bg-cover min-h-[90vh] py-10 md:py-20 bg-center overflow-hidden relative px-5 md:px-14">
      <motion.h1

      ref={h1Ref}

        initial={{x:1000}}
        animate={isInView ? { x: 0 } : {}} // Animate when in view

        transition={{
        duration: 2, // Time taken for the animation
        ease: "easeIn", // Easing function for a smooth effect
  }}
    
      
      
       className="absolute text-6xl sm:text-[230px] inline-block font-headingFont text-white text-nowrap">
        Proudly Featured In
      </motion.h1>

      <div className="flex justify-center items-center relative mt-10 ">
        <motion.div
          className="flip-card w-[400px] aspect-[9/16] relative"
          style={{ perspective: "1000px" }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            className="flip-inner absolute w-full h-full"
            initial="front"
            animate={isFlipped ? "back" : "front"}
            variants={flipVariants}
            transition={{ duration: 0.8 }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Front Image */}
            <motion.div
              className="absolute w-full h-full"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <Image
                className="w-full h-full object-contain"
                alt="Going Places Magazine"
                width={500}
                height={500}
                src="/magazine.webp"
              />
            </motion.div>

            {/* Back Image */}
            <motion.div
              className="absolute w-full h-full"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <Image
                className="w-full h-full object-contain"
                alt="Mint Magazine"
                width={800}
                height={800}
                src="/mint-magazine2.webp"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
