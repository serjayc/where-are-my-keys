"use client";

import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "motion/react";

import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { FOOTER_DATA } from "@/config/footer.data";
import Container from "@/components/shared/Container";

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

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary-foreground">
      <Container className="py-8 lg:py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start"
          >
            <Logo />

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              Discover the story, meet the cast, and explore everything behind
              the scenes. Your journey starts here.
            </p>

            <Button className="mt-4" size="lg" asChild>
              <Link href="/#trailer">
                <Play className="size-4 fill-current" />
                Watch the trailer
                <ArrowUpRight className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
            {FOOTER_DATA.map((section) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                  {section.title}
                </h2>

                <ul className="flex flex-col items-start gap-3.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                        <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="my-8 h-px origin-left bg-border lg:my-12"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-10 flex items-center justify-center w-full text-xs text-muted-foreground"
        >
          <motion.p variants={itemVariants}>
            © 2026 All rights reserved.
          </motion.p>
        </motion.div>
      </Container>
    </footer>
  );
}
