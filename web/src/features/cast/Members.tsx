"use client";

import { CAST_DATA } from "@/config/cast.data";
import MemberCard from "./MemberCard";
import { motion } from "motion/react";

export default function Members() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {CAST_DATA.map((item, index) => (
        <motion.div
          key={item.name}
          className="w-full"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          <MemberCard item={item} />
        </motion.div>
      ))}
    </section>
  );
}
