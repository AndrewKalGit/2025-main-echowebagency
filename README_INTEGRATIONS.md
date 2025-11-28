# Echo Web - Integration Setup Guide

This guide explains how to set up the required third-party integrations for Echo Web.

## 1. Cookie Consent System

**Location:** `/components/CookieConsent.tsx`

**Features:**
- Cookie banner appears on first visit
- Accept/Decline buttons
- Stores decision in `localStorage`
- Cookie settings available in footer
- Only loads GA4 if cookies accepted

**Implementation:**
- Automatically included in `app/layout.tsx`
- No configuration needed

---

## 2. Google Analytics 4 (GA4)

**Setup Steps:**

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property (or use existing)
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)
4. Add to Vercel project environment variables via the **Vars section in the v0 sidebar**:
   - Key: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX`

**How it works:**
- GA4 script only loads if user accepts cookies
- Conditional loading in `/components/CookieConsent.tsx`
- Helper functions in `/lib/gtag.ts` for custom events

**Usage:**
\`\`\`typescript
import { event } from '@/lib/gtag'

event({
  action: 'form_submit',
  category: 'engagement',
  label: 'contact_form',
  value: 1
})
\`\`\`

---

## 3. Google Search Console (GSC)

**Setup Steps:**

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Choose "HTML tag" verification method
4. Copy the content value from the meta tag
5. Add to Vercel project environment variables via the **Vars section in the v0 sidebar**:
   - Key: `NEXT_PUBLIC_GSC_VERIFICATION_CODE`
   - Value: `your_verification_code_here`

**How it works:**
- Meta tag automatically added to `<head>` in `app/layout.tsx`
- Uses Next.js Metadata API `verification.google`

---

## 4. EmailJS Setup

**✅ Package Already Installed:** `@emailjs/browser` is already in your dependencies.

**Architecture:** EmailJS runs server-side via Next.js Server Actions to keep credentials secure.

**Setup Steps:**

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   \`\`\`
   {{to_name}} - Always "Echo Web Team"
   {{from_name}} - User's name
   {{from_email}} - User's email
   {{message}} - User's message
   {{company}} - User's company name
   {{phone}} - User's phone
   {{type}} - Form type (contact, booking, lead magnet, etc.)
   {{reply_to}} - User's email
   \`\`\`
4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
5. Add to Vercel project environment variables via the **Vars section in the v0 sidebar**:
   - Key: `EMAILJS_SERVICE_ID`
   - Value: `service_xxxxxxx`
   - Key: `EMAILJS_TEMPLATE_ID`
   - Value: `template_xxxxxxx`
   - Key: `EMAILJS_PUBLIC_KEY`
   - Value: `your_public_key_here`

**Important Security Note:**
These EmailJS variables do NOT use the `NEXT_PUBLIC_` prefix because they are only accessed server-side in Server Actions and API routes, never in client code.

**How It Works:**
- Forms submit to `/api/submit-lead`
- API route calls `sendEmailAction` Server Action
- Server Action sends email via EmailJS server-side
- All credentials stay on the server

**Usage Example (Server Action):**
\`\`\`typescript
'use server'
import { sendEmailAction } from '@/app/actions/send-email'

const result = await sendEmailAction({
  name: 'John Smith',
  email: 'john@example.com',
  message: 'Interested in web design services',
  company: 'Smith LLC',
  phone: '555-123-4567',
  type: 'contact'
})

if (result.success) {
  // Email sent successfully
}
\`\`\`

**Where it's used:**
- `/app/api/submit-lead/route.ts` - Main API endpoint for all forms
- `/app/actions/send-email.ts` - Server Action handling EmailJS

---

## 5. Lead Magnet Modal

**Location:** `/components/LeadMagnetModal.tsx`

**Trigger Conditions:**
- ✓ 15 seconds have passed since page load
- ✓ User scrolled at least 50% down the page
- ✓ User accepted cookies (`acceptedCookies === true`)
- ✓ Modal hasn't been shown this session

**Features:**
- Appears once per session
- Tracks with `sessionStorage`
- Links to lead magnet form
- Responsive design

**Implementation:**
- Automatically included in `app/layout.tsx`
- No configuration needed

---

## 6. Cloudflare Turnstile (CAPTCHA Protection)

**What it does:**
Invisible CAPTCHA protection that blocks spam and bot submissions on your lead capture forms without requiring user interaction.

**Setup Steps:**

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Turnstile** section
3. Click "Add Site"
4. Configure:
   - **Site name:** Echo Web
   - **Domain:** Your domain (e.g., echoweb.com)
   - **Widget Mode:** Invisible
5. Copy your credentials
6. Add to Vercel project environment variables via the **Vars section in the v0 sidebar**:
   - Key: `TURNSTILE_SITE_KEY`
   - Value: Your Site Key (starts with `0x...`)
   - Key: `TURNSTILE_SECRET_KEY`
   - Value: Your Secret Key

**Important Security Note:**
The site key is accessed via a Server Action to satisfy deployment security requirements, even though Turnstile site keys are designed to be public (domain-restricted for security). The `TURNSTILE_SECRET_KEY` must remain private and is used server-side only for validation.

**How it works:**
- User submits form (booking, contact, or lead magnet)
- Turnstile invisibly generates a challenge token
- Token is included in form submission
- Server validates token with Cloudflare before processing
- Invalid tokens are rejected (blocks bots and spam)

**Protected Forms:**
- `/app/booking/page.tsx` - Booking consultation form
- `/app/contact/page.tsx` - Contact inquiry form
- `/app/lead-magnet/[slug]/page.tsx` - Lead magnet download forms

**Technical Implementation:**
\`\`\`typescript
// Client-side: Fetch site key from Server Action
const config = await getTurnstileConfig()
// Load Turnstile widget with site key

// Get token before submission
const turnstileToken = (window as any).turnstile?.getResponse()

// Server-side: Validate with Cloudflare
const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
  method: 'POST',
  body: JSON.stringify({
    secret: process.env.TURNSTILE_SECRET_KEY,
    response: turnstileToken,
  })
})
\`\`\`

**Files:**
- `/app/api/validate-turnstile/route.ts` - Server-side validation endpoint
- `/app/layout.tsx` - Turnstile script loader
- All form pages - Turnstile widget integration

---

## Setting Up Environment Variables in v0

**To add environment variables:**

1. Open the **v0 in-chat sidebar** (left side of screen)
2. Click on **"Vars"** section
3. Add each variable with its key and value:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_GSC_VERIFICATION_CODE`
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`
   - `TURNSTILE_SITE_KEY`
   - `TURNSTILE_SECRET_KEY`

**Important:**
- These will automatically sync to your Vercel deployment
- No need to create a `.env.local` file when using v0
- EmailJS variables are server-side only (no NEXT_PUBLIC_ prefix)

---

## Testing

**Cookie Consent:**
1. Open site in incognito mode
2. Cookie banner should appear
3. Click "Accept" - GA4 should load
4. Refresh - banner should not appear again
5. Clear localStorage to reset

**Lead Magnet Modal:**
1. Accept cookies
2. Scroll to 50% of page
3. Wait 15 seconds
4. Modal should appear
5. Won't appear again in same session

**EmailJS (via API):**
1. Fill out any form (contact, booking, etc.)
2. Form submits to `/api/submit-lead`
3. Check browser console for success/error messages
4. Check email inbox for message
5. If errors, verify environment variables in Vars section

**Turnstile (CAPTCHA):**
1. Open any form (booking, contact, lead magnet)
2. Fill out the form fields
3. Open browser DevTools → Network tab
4. Submit the form
5. Look for request to Cloudflare Turnstile API
6. Should see successful verification response
7. Form should submit successfully
8. Try submitting without waiting - may be blocked by Turnstile

---

## Troubleshooting

**GA4 not loading:**
- Check `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set in Vars section
- Ensure cookies are accepted
- Check browser console for script loading
- Verify in GA4 Real-Time reports

**EmailJS not working:**
- Verify all three EmailJS environment variables are set in Vars section
- Check EmailJS dashboard for service status
- Ensure template variables match the Server Action structure
- Check server logs (Vercel Functions) for error messages
- Test with: `console.log` in `/app/api/submit-lead/route.ts`

**Modal not appearing:**
- Verify cookies are accepted
- Check scroll position (must be 50%+)
- Wait full 15 seconds
- Clear sessionStorage to reset

**Turnstile not working:**
- Verify both `TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` are set in Vars section
- Check that Turnstile script loads in browser (view page source)
- Ensure your domain is added to Turnstile site configuration in Cloudflare
- Check browser console for Turnstile errors
- Verify Site Key matches the one in Cloudflare dashboard
- For "Challenge Error" messages, check that Secret Key is correct

**"Please complete the verification" error:**
- Turnstile widget may not have loaded yet
- Check Network tab for failed requests to Cloudflare
- Verify `TURNSTILE_SITE_KEY` environment variable is set
- Try refreshing the page and resubmitting

---

## Production Deployment

When you publish your v0 project to Vercel:

1. Environment variables in the Vars section automatically deploy
2. Verify integrations after deployment:
   - Check GA4 Real-Time reports
   - Submit test form to verify EmailJS
   - Verify GSC ownership

3. Monitor:
   - Check GA4 regularly for traffic
   - Monitor EmailJS usage/quota in dashboard
   - Check Search Console for indexing status
   - Review Vercel Function logs for email errors

## Security Notes

✅ **Server-Side Email Sending:** All EmailJS credentials are accessed only in Server Actions and API routes, never exposed to the client.

✅ **Cookie Consent:** Users must accept cookies before analytics run.

✅ **Environment Variables:** All sensitive data uses Next.js environment variables, not hardcoded values.

✅ **CAPTCHA Protection:** Turnstile protects all lead forms from spam and bot submissions. The Site Key is accessed via a Server Action to satisfy deployment security requirements, even though Turnstile site keys are designed to be public (domain-restricted for security). The `TURNSTILE_SECRET_KEY` must remain private and is used server-side only for validation.
