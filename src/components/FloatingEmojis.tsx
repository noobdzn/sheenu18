import { useEffect, useState } from "react";

const EMOJIS = ["🎂", "🎉", "🥳", "🎈", "💀", "✨", "🤡", "💖", "🔥", "😭", "💅", "🦋", "🍰", "🎊", "👑"];

interface FloatingEmoji {
  id: number;
  emoji: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

const FloatingEmojis = () => {
  const [emojis, setEmojis] = useState<FloatingEmoji[]>([]);

  useEffect(() => {
    const generated: FloatingEmoji[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      left: Math.random() * 100,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 10,
      size: 20 + Math.random() * 24,
    }));
    setEmojis(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {emojis.map((e) => (
        <span
          key={e.id}
          className="absolute"
          style={{
            left: `${e.left}%`,
            fontSize: `${e.size}px`,
            animation: `float-emoji ${e.duration}s linear ${e.delay}s infinite`,
          }}
        >
          {e.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingEmojis;
