"use server"

// Server Action to get Turnstile configuration
// This keeps the site key server-side to satisfy deployment security requirements
export async function getTurnstileConfig() {
  return {
    siteKey: process.env.TURNSTILE_SITE_KEY || "",
  }
}
