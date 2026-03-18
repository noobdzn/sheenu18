import { motion } from "framer-motion";

const NOTES = [
  { text: "How seriously you take your goals", color: "bg-primary/20", rotate: -5, x: "5%", y: "10%" },
  { text: "I love it when you take things extra 'SHenshitive' 😭", color: "bg-accent/20", rotate: 3, x: "55%", y: "5%" },
  { text: "18 but still acts like a toddler (affectionate) 🍼", color: "bg-secondary/20", rotate: -2, x: "15%", y: "55%" },
  { text: "You make my brain go brrr in the best way possible 🧠✨", color: "bg-primary/20", rotate: 4, x: "60%", y: "50%" },
  { text: "The way you hug me ❤️", color: "bg-accent/20", rotate: -3, x: "35%", y: "75%" },
  { text: "Your clumsiness - i still cant stop laughing about that chair 😂😭", color: "bg-secondary/20", rotate: 2, x: "75%", y: "80%" },
];

const StickyNotes = () => {
  return (
    <section className="py-20 px-4">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-5xl text-center text-glow-pink mb-16"
      >
        <span className="text-primary">Things I Like About You</span> 💛
      </motion.h2>

      <div className="relative max-w-5xl mx-auto min-h-[500px]">
        {NOTES.map((note, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: note.rotate * 3 }}
            whileInView={{ scale: 1, rotate: note.rotate }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, type: "spring", bounce: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 20 }}
            className={`${note.color} backdrop-blur-sm border border-border p-5 rounded-lg shadow-neon-purple max-w-[250px] font-comic text-foreground text-sm cursor-pointer
              sm:absolute`}
            style={{
              left: note.x,
              top: note.y,
            }}
          >
            <div className="w-8 h-2 gradient-pink-purple rounded-full mx-auto mb-3 opacity-60" />
            {note.text}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StickyNotes;
