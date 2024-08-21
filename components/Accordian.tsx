/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

interface AccordionProps {
  items: Array<{
    title: string;
    content: React.ReactNode;
  }>;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isExpanded,
  onToggle,
}) => {
  const cardVariants: Variants = {
    collapsed: {
      height: "60px",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    expanded: {
      height: "auto",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  const contentVariants: Variants = {
    collapsed: { opacity: 0 },
    expanded: {
      opacity: 1,
      transition: { delay: 0.1 },
    },
  };

  const chevronVariants: Variants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  };

  return (
    <motion.div
      className="w-full my-4 cursor-pointer select-none overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700"
      variants={cardVariants}
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between p-4 text-gray-900 dark:text-gray-100">
        <h2
          className={`m-0 text-sm font-semibold ${
            isExpanded ? "" : "truncate"
          } flex-grow pr-4`}
        >
          {title}
        </h2>
        <motion.div variants={chevronVariants} className="flex-shrink-0">
          <ChevronDown size={18} />
        </motion.div>
      </div>
      <motion.div
        className="text-md select-none px-4 pb-4"
        variants={contentVariants}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
      >
        <div className="m-0 text-sm text-gray-900 dark:text-gray-100">
          {content}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

const accordionItems = [
  {
    title: "Do I need to be a coding genius to join ASPDC?",
    content: (
      <p>
        Nope! Whether you're a total newbie or a coding wizard, you're welcome
        here. We're all about learning and growing together.
      </p>
    ),
  },
  {
    title: "What kind of events does ASPDC organize?",
    content: (
      <p>
        We've got it all! Workshops, hackathons, coding competitions, tech
        talks, and chill social events. There's always something exciting
        happening!
      </p>
    ),
  },
  {
    title: "How can I stay updated on ASPDC events and workshops?",
    content: (
      <p>
        Follow us on social media, join our Discord server or our WhatsApp
        group, We'll keep you in the loop!
      </p>
    ),
  },
  {
    title: "I have a project or a blog that I want to showcase on this website",
    content: (
      <p>
        Drop us a message on any of our socials and if it's awesome, we would
        love to showcase it!
      </p>
    ),
  },
  {
    title: "Is there a membership fee to join ASPDC?",
    content: (
      <p>
        Nope, it's free to join! We want everyone to have access to learning and
        opportunities.
      </p>
    ),
  },
  {
    title: "How to be part of the ASPDC Core Team?",
    content: (
      <p>
        We're always looking for passionate and dedicated members to join the
        core team. Keep an eye out for announcements and apply when we're
        recruiting! If you just can't wait, just fill out this{" "}
        <a
          href="https://72buefq3vo3.typeform.com/to/GfY7emQ2"
          className="text-blue-500 hover:underline"
          target="_blank"
        >
          form
        </a>
        .
      </p>
    ),
  },
  {
    title: "I have an idea for a workshop or event. How can I share it?",
    content: (
      <p>
        We'd love to hear your ideas! Drop us a message on social media or in
        our Discord server. We're always looking for new ideas and fresh
        perspectives.
      </p>
    ),
  },
];

const AccordionComp: React.FC = () => {
  return (
    <div>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default AccordionComp;
