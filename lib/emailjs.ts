export interface EmailData {
  name: string
  email: string
  message?: string
  company?: string
  phone?: string
  [key: string]: any
}

// DEPRECATED: Use sendEmailAction Server Action instead
// This avoids exposing environment variables to the client
export async function sendEmail(templateData: EmailData): Promise<{ success: boolean; message: string }> {
  console.warn('[v0] sendEmail is deprecated. Use sendEmailAction Server Action instead.')
  
  return {
    success: false,
    message: 'Please use the Server Action instead of this client function.',
  }
}
