"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  foundObjects: string[];
  onFind: (object: string) => void;
  isSearching: boolean;
}

const HOTSPOTS = [
  { id: "KeyRound", label: "Key", x: 92.5, y: 70.5, w: 4, h: 8 },
  { id: "Ghost", label: "Ghost", x: 21, y: 15, w: 4, h: 8 },
  { id: "BookOpen", label: "Book", x: 35, y: 84, w: 12, h: 8 },
  { id: "Soup", label: "Soup", x: 34.5, y: 72, w: 8, h: 10 },
  { id: "Lamp", label: "Lamp", x: 89, y: 35, w: 5, h: 18 },
  { id: "Clock", label: "Clock", x: 84.5, y: 2, w: 6, h: 10 },
  { id: "Coffee", label: "Coffee", x: 48, y: 73, w: 6, h: 12 },
  { id: "Headphones", label: "Headphones", x: 71.5, y: 39.5, w: 4, h: 8 },
  { id: "Glasses", label: "Glasses", x: 29.5, y: 57, w: 6, h: 4 },
];

export default function GameField({
  foundObjects,
  onFind,
  isSearching,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      className="relative aspect-video w-full overflow-hidden rounded-2xl"
    >
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/40 text-center sm:hidden">
        <p className="text-sm font-medium">
          For the best view, <br /> rotate your device to landscape
        </p>
      </div>
      <Image
        src="/house.png"
        alt="Picture of the room"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
      />

      {isSearching &&
        HOTSPOTS.map((item) => {
          const found = foundObjects.includes(item.id);

          return (
            <button
              key={item.id}
              type="button"
              aria-label={`Find ${item.label}`}
              disabled={found}
              onClick={() => onFind(item.id)}
              className={`absolute rounded-md border-2 transition ${
                found
                  ? "cursor-default border-emerald-400/80 bg-emerald-400/20"
                  : "cursor-crosshair border-transparent hover:border-white/50 hover:bg-white/10"
              }`}
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                width: `${item.w}%`,
                height: `${item.h}%`,
              }}
            >
              {found && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">
                  ✓
                </span>
              )}
            </button>
          );
        })}
    </motion.div>
  );
}
