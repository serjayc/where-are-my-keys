"use client";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.5,
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

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
        className="absolute inset-0 z-20 bg-black pointer-events-none"
      />

      {/* Background overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-background/50 via-background/15 to-background" />
      <div className="absolute inset-0 bg-linear-to-r from-background/80 via-background/20 to-transparent" />

      <Container className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 flex items-center gap-4"
          >
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
              An independent short film
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-4 font-serif text-6xl font-semibold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Where are <span className="italic text-primary">my keys?</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mb-8 space-y-4 text-base sm:text-lg"
          >
            <span className="block font-mono font-medium tracking-widest text-primary">
              Two friends. One house. No way out.
            </span>

            <p className="text-muted-foreground">
              Some things are right where you left them. <br />
              Others have a story of their own.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Button
              size="lg"
              className="group px-8 py-5 font-mono transition-all duration-300 hover:brightness-110"
              asChild
            >
              <Link href="#trailer">
                <Play />
                Watch Trailer
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group px-8 py-5 font-mono transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary"
              asChild
            >
              <Link href="/story">
                Uncover the Story
                <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
