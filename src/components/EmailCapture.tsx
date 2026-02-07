"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projectConfig } from "@/lib/config";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!projectConfig.emailCapture) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Default: mailto link. Upgrade to Supabase/Resend during development.
    if (projectConfig.contactEmail) {
      window.location.href = `mailto:${projectConfig.contactEmail}?subject=Notify me about ${projectConfig.name}&body=Please notify me at ${email} when ${projectConfig.name} launches.`;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Thanks! We&apos;ll let you know when we launch.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-2.5 rounded-lg text-sm glass focus:outline-none focus:ring-1"
        style={{ color: "var(--text-primary)" }}
      />
      <button
        type="submit"
        className="px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90 cursor-pointer"
        style={{ backgroundColor: "var(--accent)" }}
      >
        Notify me
      </button>
    </form>
  );
}
