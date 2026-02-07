"use client";

import { motion } from "framer-motion";
import { projectConfig } from "@/lib/config";
import { ParticleBackground } from "./ParticleBackground";
import { EmailCapture } from "./EmailCapture";
import { EcosystemBadge } from "./EcosystemBadge";

export function ComingSoon() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <ParticleBackground color={projectConfig.accentColor} />

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-2xl text-center">
        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight accent-gradient">
            {projectConfig.name}
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl max-w-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          {projectConfig.tagline}
        </motion.p>

        {/* Glass Card with Description */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="glass glow rounded-2xl p-8 w-full max-w-lg"
        >
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {projectConfig.description}
          </p>

          {/* Launch Estimate */}
          {projectConfig.launchEstimate && (
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                Expected launch:{" "}
                <span className="accent-gradient font-medium">
                  {projectConfig.launchEstimate}
                </span>
              </p>
            </div>
          )}
        </motion.div>

        {/* Email Capture */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <EmailCapture />
        </motion.div>

        {/* Ecosystem Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-4"
        >
          <EcosystemBadge />
        </motion.div>
      </div>
    </main>
  );
}
