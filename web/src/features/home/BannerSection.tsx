"use client";

import EnlistForm from "@/features/enlist/ui/EnlistForm";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function BannerSection() {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-secondary/50 py-20 sm:py-28"
    >
      <motion.div
        className="mx-auto max-w-3xl px-6 text-center sm:px-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={itemVariants}
          className="mb-10 flex items-center justify-center gap-4"
        >
          <span className="h-px w-8 bg-primary" />
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
            The next chapter awaits
          </p>
          <span className="h-px w-8 bg-primary" />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
        >
          Something is
          <span className="mt-2 block italic text-primary sm:mt-4">
            coming.
          </span>
        </motion.h2>

        <EnlistForm />

        <motion.div
          variants={itemVariants}
          className="mx-auto mt-8 max-w-lg mb-4"
        >
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            New events, exclusive premieres and stories worth experiencing. Be
            the first to know when something happens.
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground"
        >
          Exclusive updates · Upcoming events · First access
        </motion.p>
      </motion.div>
    </section>
  );
}
