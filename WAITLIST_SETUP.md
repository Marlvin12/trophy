# Waitlist Setup Instructions

## Option 1: Use Formspree (Recommended - Free & Easy)

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your Form ID (looks like: `xbjnkqdb`)
5. Update the URL in `src/components/WaitlistModal.tsx`:
   - Replace `YOUR_FORM_ID` with your actual form ID
   - Example: `https://formspree.io/f/xbjnkqdb`

## Option 2: Use Your Own Email

For now, you can also just use your email directly:
- Change the fetch URL to: `https://formspree.io/f/YOUR_FORM_ID`
- Or use: `ryan2002224@gmail.com`

## Testing

1. Click any "Join Waitlist" button
2. Fill in name and email
3. Submit
4. You'll receive submissions in your Formspree dashboard or email

## Alternative Services

- **Google Forms**: Free, easy integration
- **Typeform**: Beautiful forms
- **Mailchimp**: Email marketing platform
- **ConvertKit**: Creator-focused email platform
- **Custom Backend**: Build your own API endpoint


