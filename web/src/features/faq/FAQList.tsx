"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_DATA } from "@/config/faq.data";
import { motion } from "motion/react";

export default function FAQList() {
  return (
    <section className="space-y-10">
      {FAQ_DATA.map((section, sectionIndex) => (
        <motion.section
          key={section.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.5,
            delay: sectionIndex * 0.2,
            ease: "easeOut",
          }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <h2 className="font-serif text-primary text-3xl md:text-4xl">
              {section.title}
            </h2>

            <p className="text-sm text-muted-foreground">
              {section.description}
            </p>
          </div>

          <Accordion type="single" collapsible>
            {section.items.map((item, itemIndex) => (
              <AccordionItem
                key={item.question}
                value={`section-${sectionIndex}-item-${itemIndex}`}
                className="transition-colors duration-200"
              >
                <AccordionTrigger className="text-lg transition-colors duration-200 hover:text-primary hover:no-underline">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="text-base text-muted-foreground whitespace-normal wrap-break-word">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>
      ))}
    </section>
  );
}
