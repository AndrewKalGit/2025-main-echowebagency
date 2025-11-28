"use server"

// Server Action for sending emails via EmailJS
// This keeps all EmailJS credentials on the server side

export interface EmailData {
  name: string
  email: string
  message?: string
  company?: string
  phone?: string
  type?: string
  [key: string]: any
}

export async function sendEmailAction(data: EmailData): Promise<{ success: boolean; message: string }> {
  try {
    // Import EmailJS server-side
    const emailjs = await import("@emailjs/browser")

    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID
    const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("[v0] EmailJS environment variables not configured")
      return {
        success: false,
        message: "Email service not configured. Please contact us directly at contact@echowebagency.com",
      }
    }

    // Prepare template data
    const templateData = {
      to_name: "Echo Web Team",
      from_name: data.name,
      from_email: data.email,
      message: data.message || "",
      company: data.company || "",
      phone: data.phone || "",
      type: data.type || "general",
      reply_to: data.email,
      ...data,
    }

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateData, PUBLIC_KEY)

    console.log("[v0] Email sent successfully:", response.status)

    return {
      success: true,
      message: "Email sent successfully! We'll be in touch within 24 hours.",
    }
  } catch (error) {
    console.error("[v0] EmailJS error:", error)

    return {
      success: false,
      message: "Failed to send email. Please try again or contact us at contact@echowebagency.com",
    }
  }
}

export const sendLeadEmail = sendEmailAction
