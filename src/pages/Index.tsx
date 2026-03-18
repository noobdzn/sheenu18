import FloatingEmojis from "@/components/FloatingEmojis";
import HeroSection from "@/components/HeroSection";
import AdultingDisclaimer from "@/components/AdultingDisclaimer";
import GoofGallery from "@/components/GoofGallery";
import StickyNotes from "@/components/StickyNotes";
import LetterSection from "@/components/LetterSection";
import RunawayButton from "@/components/RunawayButton";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingEmojis />
      <HeroSection />
      <AdultingDisclaimer />
      <GoofGallery />
      <LetterSection />
      <StickyNotes />
      <RunawayButton />

      {/* Footer */}
      <footer className="py-12 text-center border-t border-border">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-comic text-muted-foreground text-lg"
        >
          Made with 💖 by{" "}
          <span className="text-primary font-bold text-glow-pink">Wierdo</span>
        </motion.p>
        <p className="font-comic text-sm text-muted-foreground mt-2">
          © 2026 Sheenu's 18th Birthday Inc. | All rights reserved (not really) 🤡
        </p>
      </footer>
    </div>
  );
};

export default Index;
