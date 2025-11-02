# Alex Fasih - Portfolio Website

A modern, production-ready portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with dark mode support
- **Animation**: Framer Motion (to be added)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
/
├── app/                  # Next.js app router directory
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── Navbar.tsx        # Navigation component
│   └── Footer.tsx        # Footer component
├── lib/                  # Utility functions
│   └── utils.ts          # Helper utilities
├── data/                 # Data and configuration
│   └── site.config.ts    # Site configuration
├── styles/               # Additional styles
│   └── variables.css     # CSS variables
├── public/               # Static assets
└── types/                # TypeScript type definitions (to be created)
```

## Environment Variables

Create a `.env.local` file in the root directory for local development. Copy `.env.example` and fill in the values:

```bash
cp .env.example .env.local
```

### Required Variables

- `NEXT_PUBLIC_SITE_URL` - Your site's URL (default: http://localhost:3000)

### Optional Variables

Additional environment variables will be documented as features are added. See `.env.example` for current placeholders.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Add environment variables in the Vercel dashboard if needed

## Development Roadmap

- [x] Step 1: Project foundation and setup
- [ ] Step 2: Layout components (Navbar, Footer)
- [ ] Step 3: Home page with About section
- [ ] Step 4: Experience timeline
- [ ] Step 5: Projects showcase
- [ ] Step 6: Resume viewer
- [ ] Step 7: Blog structure
- [ ] Step 8: Contact form
- [ ] Step 9: AI Chatbot
- [ ] Step 10: Dark mode toggle

## License

Private project for Alex Fasih.


