"use client";

import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";

import Navbar from "./Navbar";
import HeaderMobile from "./HeaderMobile";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarFold } from "lucide-react";
import { motion } from "motion/react";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 bg-primary-foreground/80 border-b border-border backdrop-blur-md"
    >
      <Container>
        <div className="h-20 flex items-center justify-between gap-8">
          <Logo />
          <Navbar />
          <Button size="lg" className="hidden lg:flex" asChild>
            <Link href="/#events">
              <CalendarFold />
              Upcoming Events
            </Link>
          </Button>
          <HeaderMobile />
        </div>
      </Container>
    </motion.header>
  );
}
