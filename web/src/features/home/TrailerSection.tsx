"use client";

import Container from "@/components/shared/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function TrailerSection() {
  return (
    <section id="trailer" className="py-16">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              The Official Film
            </span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden border border-cream/10 bg-black shadow-2xl shadow-black/30"
          >
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/u31qwQUeGuM?rel=0"
                title="Where are my keys? — Official Trailer"
                allowFullScreen
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-col justify-between gap-4 border-t border-cream/15 pt-5 sm:flex-row sm:items-center"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Where are my keys? <span className="mx-2 text-primary">/</span>
              Official Trailer
            </p>

            <Link
              href="/story"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:text-foreground"
            >
              Explore the story
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
