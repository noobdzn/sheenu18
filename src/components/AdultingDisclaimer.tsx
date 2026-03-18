import { motion } from "framer-motion";

const AdultingDisclaimer = () => {
  return (
    <section className="py-20 px-4 flex justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.4 }}
        className="max-w-2xl w-full border-neon rounded-lg p-8 bg-card/80 backdrop-blur-sm animate-rainbow-border"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">⚠️</span>
          <h2 className="font-header text-2xl sm:text-3xl text-accent text-glow-yellow">
            BREAKING NEWS
          </h2>
          <span className="text-3xl">⚠️</span>
        </div>

        <div className="font-comic text-lg text-foreground space-y-4">
          <p>
            <strong className="text-primary">Shireen</strong>, aka {" "}
            <strong className="text-accent">"Sheenu"</strong> (a.k.a. Ching Chong Gupta) has,
            as of this date, completed <strong className="text-primary">EIGHTEEN (18)</strong>{" "}
            full revolutions around the Sun;
          </p>
          <p>
            <strong className="text-primary">SO I GUESS</strong> we
             can finally call her an{" "}
            <span className="text-secondary font-bold text-glow-purple">"adult?"</span> (XD).
          </p>
          <p className="border-t border-border pt-4 text-accent font-bold text-xl text-center">
            🍰 HAPPYYY BIRTHDAYY BONDHUUUU 🎂
          </p>
        </div>

        <motion.div
          className="mt-4 text-center text-sm text-muted-foreground font-comic"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AdultingDisclaimer;
