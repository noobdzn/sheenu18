import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const floatingItems = ["💖", "✨", "💌", "🌸", "💗", "✨", "💖", "🌸"];

const LetterSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Floating hearts/sparkles */}
      {isOpen &&
        floatingItems.map((item, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 50, x: Math.random() * 200 - 100 }}
            animate={{
              opacity: [0, 1, 0],
              y: [50, -100 - Math.random() * 200],
              x: Math.random() * 300 - 150,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut",
            }}
            className="absolute text-2xl pointer-events-none"
            style={{ left: `${10 + i * 10}%`, top: "60%" }}
          >
            {item}
          </motion.span>
        ))}

      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-5xl text-center text-glow-pink mb-16"
      >
        <span className="text-primary">A Letter for Sheenu</span> 💌
      </motion.h2>

      <div className="max-w-lg mx-auto flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 90 }}
              transition={{ type: "spring", bounce: 0.5 }}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer group"
            >
              {/* Envelope */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", bounce: 0.6 }}
                className="relative w-72 h-48 sm:w-80 sm:h-52"
              >
                {/* Envelope body */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-sm rounded-xl border border-border shadow-neon-pink" />
                {/* Envelope flap */}
                <div
                  className="absolute top-0 left-0 right-0 h-1/2 origin-top"
                  style={{
                    clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                  }}
                >
                  <div className="w-full h-full gradient-pink-purple opacity-40 rounded-t-xl" />
                </div>
                {/* Heart seal */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl"
                >
                  💌
                </motion.div>
              </motion.div>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-comic text-muted-foreground text-center mt-4 text-sm sm:text-base"
              >
                Tap to open 👉👈
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ rotateX: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotateX: 0, opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
              }}
              style={{ perspective: 1000 }}
              className="w-full"
            >
              <div
                className="rounded-2xl p-6 sm:p-8 border border-border relative"
                style={{
                  background:
                    "linear-gradient(145deg, hsl(40 30% 92%), hsl(35 25% 88%))",
                  boxShadow:
                    "0 8px 32px hsl(320 100% 60% / 0.15), 0 2px 8px hsl(0 0% 0% / 0.1)",
                }}
              >
                {/* Paper texture lines */}
                <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-2xl">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="border-b border-primary/20"
                      style={{ marginTop: i === 0 ? "48px" : "28px" }}
                    />
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="relative z-10"
                  style={{ fontFamily: "'Comic Neue', cursive" }}
                >
                  <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-4">
                    Dear Sheenu,
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3">
                    Happy 18th birthday!
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3">
                    I thought writing one letter wasn’t enough… so here’s another one, just for you.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3">
                    You're clever, goofy , clumsy, and thus easily makes me laugh and someone who somehow manages to be both chaotic and comforting at the same time. I genuinely consider myself so lucky to have you in my life.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3">
                    
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3">
                    I'm happy we happened. And You're stuck with me, and I'm stuck with you. And tbh, that's the best deal either of us ever got. And hope you liked my website :)💖
                  </p>
                  <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mt-6">
                    Yours Lovingly,
                  </p>
                  <p className="text-xl sm:text-2xl font-bold mt-1" style={{ color: "hsl(320 100% 60%)" }}>
                    — Wierdo 
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LetterSection;
