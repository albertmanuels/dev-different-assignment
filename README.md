# Property Listing Platform

A modern, responsive property listing platform built with Next.js 15, TypeScript, and Sanity CMS. Browse and explore stunning properties with a beautiful, intuitive interface.

🌐 **Live Demo**: [https://real-estate-dev-different.vercel.app/](https://real-estate-dev-different.vercel.app/)

## 🏠 Features

- **Modern Property Cards** - Beautiful, responsive property card layouts
- **Property Details** - Comprehensive property detail pages with rich content
- **Sanity CMS Integration** - Content management with rich text descriptions
- **Server-Side Rendering** - Fast loading with Next.js App Router
- **Responsive Design** - Works perfectly on all device sizes
- **Currency Formatting** - Professional price display with proper formatting
- **Image Optimization** - Optimized image loading with Next.js Image component

## 🛠 Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Backend & CMS
- **[Sanity CMS](https://www.sanity.io/)** - Headless content management system
- **[@sanity/client](https://www.npmjs.com/package/@sanity/client)** - Sanity JavaScript client
- **[@sanity/image-url](https://www.npmjs.com/package/@sanity/image-url)** - Sanity image URL builder
- **[next-sanity](https://www.npmjs.com/package/next-sanity)** - Sanity toolkit for Next.js
- **[@portabletext/react](https://www.npmjs.com/package/@portabletext/react)** - Rich text rendering

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking

## 📦 Installation

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **Sanity account** (for content management)

### 1. Clone the Repository

```bash
git clone https://github.com/albertmanuels/dev-different-assignment.git
cd dev-different-assignment
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=your_api_version
```

### 4. Configure Sanity

1. Create a new Sanity project at [sanity.io](https://www.sanity.io/)
2. Update your environment variables with your Sanity project details
3. Set up your Sanity schemas (see [Sanity Schema](#-sanity-schema) section)

### 5. Set Up Sanity Studio (Optional)

If you want to run Sanity Studio locally for content management:

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Create a new Sanity project directory
mkdir sanity-studio
cd sanity-studio

# Initialize Sanity project
sanity init

# Follow the prompts:
# - Choose "Create new project"
# - Select your preferred dataset name (usually "production")
# - Choose "Clean project with no predefined schemas"

# Start Sanity Studio
sanity dev
```

Sanity Studio will be available at [http://localhost:3333](http://localhost:3333)

**Alternative: Use Sanity Studio in the cloud**
- Access your studio at `https://your-project-id.sanity.studio`
- **For this project**: [https://real-estate-dev-different.sanity.studio/structure/property](https://real-estate-dev-different.sanity.studio/structure/property)
- No local setup required

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build the application
npm run build
# or
yarn build

# Start the production server
npm start
# or
yarn start
```

### Linting

```bash
npm run lint
# or
yarn lint
```

## 🔧 Configuration Files

- **`next.config.ts`** - Next.js configuration
- **`tailwind.config.ts`** - Tailwind CSS configuration (if using v3)
- **`postcss.config.mjs`** - PostCSS configuration
- **`tsconfig.json`** - TypeScript configuration
- **`eslint.config.mjs`** - ESLint configuration

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Add your environment variables in Vercel dashboard
4. Deploy automatically

## 📝 Development Notes

### Sanity Studio Management

**Running Sanity Studio Locally:**
```bash
# From your sanity-studio directory
cd sanity-studio
sanity dev
```

**Deploying Sanity Studio:**
```bash
# Deploy studio to Sanity's hosted platform
sanity deploy
```

**Managing Sanity Schemas:**
```bash
# Deploy schema changes
sanity schema deploy

# Validate your schemas
sanity schema validate
```

**Useful Sanity Commands:**
```bash
# Check project info
sanity projects list

# View dataset info
sanity dataset list

# Export dataset
sanity dataset export production backup.tar.gz

# Import dataset
sanity dataset import backup.tar.gz production
```

### Adding New Properties

1. Access your Sanity Studio (typically at `your-project.sanity.studio`)
2. Create new property entries with all required fields
3. Make sure to set `published` to `true` for properties to appear on the site

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Albert Manuel**
- GitHub: [@albertmanuels](https://github.com/albertmanuels)

---

Built with ❤️ using Next.js, TypeScript, and Sanity CMS
