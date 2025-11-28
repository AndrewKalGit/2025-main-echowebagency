import { NextRequest, NextResponse } from 'next/server'
import { sendEmailAction } from '@/app/actions/send-email'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    console.log('[v0] Lead submission received:', {
      type: data.type || 'general',
      email: data.email,
      timestamp: new Date().toISOString(),
    })

    const emailResult = await sendEmailAction({
      name: data.name || data.firstName || 'Unknown',
      email: data.email,
      message: data.message || data.description || data.projectIdea || '',
      company: data.company || data.businessName || '',
      phone: data.phone || '',
      type: data.type || 'general',
    })

    if (!emailResult.success) {
      console.error('[v0] Failed to send email:', emailResult.message)
    }

    return NextResponse.json(
      {
        success: true,
        message: emailResult.success 
          ? 'Lead submitted successfully. Check your email for confirmation.'
          : 'Lead received but email notification failed. We will still respond within 24 hours.',
        emailSent: emailResult.success,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Error submitting lead:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit lead. Please try emailing us directly at hello@echoweb.com',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
