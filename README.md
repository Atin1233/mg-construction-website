# M.G. Construction Co. Website

A professional Next.js website for M.G. Construction Co., a concrete and foundation construction company serving New Jersey since 1991.

## Features

- **Modern Design**: Professional construction industry aesthetic with custom color scheme
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized with Next.js 14 App Router and Image optimization
- **SEO Optimized**: Comprehensive metadata, Open Graph tags, and JSON-LD schema
- **Contact Form**: Functional contact form with email integration
- **Image Gallery**: Responsive masonry layout for project showcase
- **Smooth Animations**: Framer Motion animations for enhanced UX

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form management
- **Nodemailer** - Email sending functionality

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Email account for contact form (Gmail or any SMTP provider)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Next-JS-Landing-Page-Starter-Template
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
- Email settings for contact form
- Google Maps API key (optional, for map embed)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── gallery/           # Gallery page
│   ├── contact/           # Contact page
│   └── api/               # API routes
│       └── contact/       # Contact form API
├── components/            # Reusable React components
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer component
│   ├── hero.tsx          # Hero section
│   └── ...
├── lib/                  # Utility functions and constants
│   └── constants.ts      # Company info and data
└── public/               # Static assets
    └── images/           # Image files
```

## Configuration

### Email Setup

The contact form uses Nodemailer to send emails. Configure your SMTP settings in `.env.local`:

**For Gmail:**
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password as `SMTP_PASSWORD`

**For other providers:**
- Update `SMTP_HOST` and `SMTP_PORT` accordingly
- Use your email credentials

### Google Maps

To enable the map embed on the contact page:
1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the Maps Embed API
3. Add the key to `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` in `.env.local`

## Building for Production

```bash
npm run build
npm start
```

## Company Information

- **Name**: M.G. Construction Co.
- **Address**: 1810 Englishtown Rd., Old Bridge, NJ 08857
- **Phone**: (732) 251-5110
- **Alt Phone**: (732) 718-4127
- **Founded**: 1991

## License

ISC
