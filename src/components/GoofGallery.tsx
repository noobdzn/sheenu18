import { motion } from "framer-motion";

// These paths match your public/images/ folder and the GitHub subfolder setup
const PHOTOS = [
  { url: "/chingchonggupta/images/1.jpeg", caption: "Ice Cream Hogger 💀", rotate: -3 },
  { url: "/chingchonggupta/images/2.jpeg", caption: "Caught in 4K 📸", rotate: 2 },
  { url: "/chingchonggupta/images/3.jpeg", caption: "More hogging💀", rotate: -1 },
  { url: "/chingchonggupta/images/4.jpeg", caption: "Paani puri hogger", rotate: 4 },
  { url: "/chingchonggupta/images/5.jpeg", caption: "Main character energy ✨", rotate: -2 },
  { url: "/chingchonggupta/images/6.jpeg", caption: "The signature goofy pose 🤪", rotate: 3 },
];

const GoofGallery = () => {
  return (
    <section className="py-20 px-4">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-5xl text-center text-glow-purple mb-4"
      >
        <span className="text-secondary">The Hall of Cringe</span>
      </motion.h2>
      <p className="font-comic text-center text-muted-foreground text-lg mb-12">
        My fav picss of my sheenuu 📸
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PHOTOS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ y: 40, opacity: 0, rotate: item.rotate }}
            whileInView={{ y: 0, opacity: 1, rotate: item.rotate }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            className="bg-foreground/5 border border-border rounded-sm p-3 shadow-neon-pink cursor-pointer"
            style={{ transform: `rotate(${item.rotate}deg)` }}
          >
            <div className="aspect-square bg-muted rounded-sm overflow-hidden flex items-center justify-center">
              <img 
                src={item.url} 
                alt={item.caption} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // If the image fails (typo or wrong extension), show a placeholder
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/400?text=Check+File+Extension";
                }}
              />
            </div>
            <p className="font-comic text-center text-sm text-muted-foreground mt-3 pb-1">
              {item.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GoofGallery;