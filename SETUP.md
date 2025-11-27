# Setup Guide for M.G. Construction Co. Website

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   
   Create a `.env.local` file in the root directory with the following:
   ```env
   # Contact Form Email Configuration
   CONTACT_EMAIL=info@mgconstruction.com
   
   # SMTP Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   
   # Send confirmation email (optional)
   SEND_CONFIRMATION_EMAIL=true
   
   # Google Maps API Key (optional)
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key-here
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## Email Configuration

### Gmail Setup

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password as `SMTP_PASSWORD` in `.env.local`

### Other Email Providers

Update `SMTP_HOST` and `SMTP_PORT` accordingly:
- **Outlook**: `smtp-mail.outlook.com:587`
- **SendGrid**: `smtp.sendgrid.net:587`
- **Mailgun**: Check Mailgun documentation

## Google Maps Setup (Optional)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable "Maps Embed API"
4. Create credentials (API Key)
5. Add key to `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` in `.env.local`

## Adding Gallery Images

1. Add images to `public/images/gallery/`
2. Name them according to category:
   - `reinforced-concrete-1.jpg` through `reinforced-concrete-4.jpg`
   - `block-walls-1.jpg` through `block-walls-4.jpg`
   - etc.
3. Images will automatically appear in the gallery

## Building for Production

```bash
npm run build
npm start
```

## Customization

### Company Information
Edit `lib/constants.ts` to update:
- Company details
- Services
- Navigation links
- Content

### Styling
- Main colors: `tailwind.config.js`
- Global styles: `app/globals.css`
- Component styles: Individual component files

### Pages
All pages are in `app/` directory:
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/services/page.tsx` - Services page
- `app/gallery/page.tsx` - Gallery page
- `app/contact/page.tsx` - Contact page

## Notes

- The site uses placeholder images - replace with actual project photos
- Contact form requires email configuration to function
- Google Maps embed is optional but recommended for better UX
- All text content can be customized in `lib/constants.ts`

