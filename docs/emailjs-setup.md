# EmailJS Setup Guide

This guide explains how to configure EmailJS for the contact form.

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Configure the template:
   - **Name**: Contact Form Template
   - **Subject**: New Contact Form Submission
   - **Content**:
     ```
     You have a new message from {{from_name}} ({{from_email}}).
     
     Message:
     {{message}}
     
     First Name: {{first_name}}
     Last Name: {{last_name}}
     Email: {{from_email}}
     ```
4. Save the template
5. Note your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it (e.g., `abc123xyz789`)

## Step 5: Configure Environment Variables

1. Create or update `.env.local` file in your project root:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. Replace the placeholder values with your actual IDs and keys

## Step 6: Update Template Variables

Make sure your EmailJS template uses these variable names:
- `{{from_name}}` - Full name (First + Last)
- `{{from_email}}` - Email address
- `{{message}}` - Message content
- `{{first_name}}` - First name
- `{{last_name}}` - Last name
- `{{to_email}}` - Recipient email (furqanfasih@yahoo.com)

## Step 7: Test the Form

1. Restart your dev server:
   ```bash
   npm run dev
   ```

2. Navigate to `/contact`
3. Fill out and submit the form
4. Check your email (furqanfasih@yahoo.com) for the message

## Troubleshooting

### Email Not Received

1. **Check EmailJS Dashboard**:
   - Go to **Logs** to see if email was sent
   - Check for any error messages

2. **Verify Environment Variables**:
   - Make sure `.env.local` exists
   - Restart dev server after adding variables
   - Check that variable names match exactly

3. **Check Template Variables**:
   - Ensure template variable names match code
   - Verify template is published

4. **Check Spam Folder**:
   - Emails might be filtered to spam
   - Whitelist EmailJS sender if needed

### Common Errors

- **"EmailJS configuration is missing"**: Environment variables not set correctly
- **"Service not found"**: Service ID is incorrect
- **"Template not found"**: Template ID is incorrect
- **"Invalid public key"**: Public key is incorrect

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Unlimited templates
- Multiple services

For production, consider upgrading to a paid plan.

## Alternative: Direct Email (Not Recommended)

If you don't want to use EmailJS, you could:
1. Use a server-side API route in Next.js
2. Use a service like SendGrid or Mailgun
3. Use Node.js mailer libraries (requires backend)

However, EmailJS is the simplest solution for client-side forms.
