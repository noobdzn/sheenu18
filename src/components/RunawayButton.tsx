import { useState, useCallback } from "react";
import { motion } from "framer-motion";

const RunawayButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);

  const MESSAGES = [
    "u dont wanna be mine ? 🥹",
    "Now im sad 💔🥹",
    "you can make up for it by buying me KFC 🍗😋",
  ];

  const runAway = useCallback(() => {
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 200;
    setPosition({ x, y });
    setAttempts((a) => a + 1);
  }, []);

  return (
    <section className="py-20 px-4">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-5xl text-center text-glow-yellow mb-8"
      >
        <span className="text-accent">The Big Question</span> 🤔
      </motion.h2>

      <div className="flex flex-col items-center min-h-[300px] justify-center relative">
        <p className="font-header text-2xl text-foreground mb-10">Do u still want to be my girlfriend?</p>

        <motion.button
          animate={{ x: position.x, y: position.y }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onMouseEnter={runAway}
          onTouchStart={runAway}
          className="px-8 py-4 gradient-pink-purple rounded-full font-header text-primary-foreground shadow-neon-pink cursor-pointer text-lg"
        >
          YESSSSS 💖
        </motion.button>

        {attempts > 0 && (
          <motion.p
            key={attempts}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="font-comic text-xl text-primary mt-8 text-glow-pink absolute bottom-0"
          >
            {MESSAGES[Math.floor(Math.random() * MESSAGES.length)]}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default RunawayButton;
