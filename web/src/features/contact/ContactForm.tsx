"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function ContactForm() {
  return (
    <motion.form
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-3xl space-y-6"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center gap-2 lg:flex-row"
      >
        <Field>
          <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
          <Input
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            autoComplete="name"
            className="transition-shadow duration-300 focus-visible:ring-2"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            autoComplete="email"
            className="transition-shadow duration-300 focus-visible:ring-2"
          />
        </Field>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Select>
          <SelectTrigger className="w-full transition-colors duration-300">
            <SelectValue placeholder="Choose a Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="general">General</SelectItem>
              <SelectItem value="festival">Festival & Screening</SelectItem>
              <SelectItem value="press">Press & Interview</SelectItem>
              <SelectItem value="collaboration">
                Creative Collaboration
              </SelectItem>
              <SelectItem value="other">Something Else</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            placeholder="Start writing..."
            className="h-30 resize-none transition-shadow duration-300 focus-visible:ring-2"
          />
        </Field>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full lg:w-fit">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="w-full lg:w-fit"
        >
          <Button className="w-full lg:w-fit" size="lg" type="submit">
            Send Message
          </Button>
        </motion.div>
      </motion.div>
    </motion.form>
  );
}
