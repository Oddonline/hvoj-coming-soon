export const projectConfig = {
  name: process.env.NEXT_PUBLIC_PROJECT_NAME || "Coming Soon",
  tagline:
    process.env.NEXT_PUBLIC_TAGLINE || "Something exciting is brewing",
  description:
    process.env.NEXT_PUBLIC_DESCRIPTION ||
    "We are working on something special. Stay tuned.",
  accentColor: process.env.NEXT_PUBLIC_ACCENT_COLOR || "#6366f1",
  emailCapture: process.env.NEXT_PUBLIC_EMAIL_CAPTURE === "true",
  ecosystemLink: "https://singularit.no",
  launchEstimate: process.env.NEXT_PUBLIC_LAUNCH_ESTIMATE || null,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || null,
};
