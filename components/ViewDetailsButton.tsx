"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ViewDetailsButtonProps {
  href: string;
  className?: string;
}

export default function ViewDetailsButton({
  href,
  className = "",
}: ViewDetailsButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${className}`}
    >
      <Link
        href={href}
        className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white outline-none transition hover:bg-gray-950 focus:scale-110 hover:scale-110 active:scale-105 dark:bg-white/10 dark:hover:bg-white/20"
      >
        View Details{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1">
          &rarr;
        </span>
      </Link>
    </motion.div>
  );
}
