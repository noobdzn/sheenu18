import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const fireConfetti = () => {
  const duration = 4000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 80,
      origin: { x: 0, y: 0.7 },
      colors: ["#ff3399", "#9933ff", "#ffcc00", "#00ffcc"],
    });
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 80,
      origin: { x: 1, y: 0.7 },
      colors: ["#ff3399", "#9933ff", "#ffcc00", "#00ffcc"],
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  };
  frame();
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-glitter overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.5 }}
        className="text-6xl mb-6"
      >
        🎂
      </motion.div>

      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="font-display text-3xl sm:text-5xl md:text-7xl text-center text-glow-pink leading-tight"
      >
        <span
          className="bg-clip-text text-transparent inline-block"
          style={{
            backgroundImage: "linear-gradient(135deg, hsl(320 100% 60%), hsl(270 100% 65%), hsl(50 100% 55%), hsl(180 100% 55%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          HAPPY 18th BIRTHDAY
        </span>
        <br />
        <span className="text-accent text-glow-yellow">CHING CHONG GUPTA!</span>
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="font-comic text-xl sm:text-2xl text-muted-foreground mt-6 text-center"
      >
        From your{" "}
        <span className="text-primary font-bold text-glow-pink">Wierdo</span> 💖
      </motion.p>

      <motion.button
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1, rotate: [0, -3, 3, -3, 0] }}
        whileTap={{ scale: 0.95 }}
        onClick={fireConfetti}
        className="mt-10 px-8 py-4 rounded-full gradient-pink-purple text-primary-foreground font-header text-lg shadow-neon-pink cursor-pointer animate-bounce-chaotic"
      >
        🎉 Press Meeee 🎉
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 text-4xl animate-bounce"
      >
        ⬇️
      </motion.div>
    </section>
  );
};

export default HeroSection;
