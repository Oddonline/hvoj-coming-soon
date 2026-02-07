"use client";

import { motion } from "framer-motion";
import { projectConfig } from "@/lib/config";

export function EcosystemBadge() {
  return (
    <motion.a
      href={projectConfig.ecosystemLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs glass transition-all hover:border-white/15"
      style={{ color: "var(--text-secondary)" }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: "var(--accent)" }}
      />
      A SingularIT Project
    </motion.a>
  );
}
