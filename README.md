# SAT Transport - Employee and Corporate Transportation Solution

This is a [Next.js](https://nextjs.org) project developed for **SAT Transport**, a company that provides a range of transportation solutions, including employee transportation, corporate travel, and vehicle rentals. The project is bootstrapped using [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and incorporates various advanced features such as responsive layouts, dynamic content loading, and optimized performance with `next/font`.

## Project Overview

The SAT Transport website is designed to showcase the company's services, client testimonials, vehicle fleet, and more. It includes a range of sections to provide users with a seamless experience:

- **Home Page**: Features an interactive background video, fleet showcase, client carousel, and customer reviews.
- **Services Page**: Details the various services offered by SAT Transport, including employee transportation, corporate travel, and vehicle rentals.
- **Clients Page**: Displays the prestigious clients who trust SAT Transport for their transportation needs.
- **News & Events**: Highlights the latest news and milestones in the company’s journey.
- **Contact Page**: Allows potential customers to get in touch via a form and view the company’s location on a map.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices using SCSS with custom media queries and responsive layouts.
- **Animations**: Integrated with `AOS` (Animate on Scroll) for smooth transitions and scroll-based animations.
- **Custom Components**: Built with reusable and scalable React components like `CustomButton`, `CustomInput`, `CustomContainer`, and more.
- **Image Optimization**: Uses Next.js's native image optimization for performance improvements.
- **Google Fonts**: Integrated custom fonts using the Next.js `next/font` package for improved load times.
- **Client Carousel & Marquee**: Showcases clients with sliding carousels and scrolling marquees.

## Tech Stack

- **Next.js**: React framework with server-side rendering, optimized performance, and API support.
- **SCSS**: For modular, maintainable, and scalable styles.
- **Bootstrap**: Utilized for grid system and responsive layout utilities.
- **AOS**: For scroll animations.
- **NProgress**: For page load progress bar.
- **React-Bootstrap**: For UI components like grids, images, and buttons.
- **Google Fonts**: Optimized fonts using the Next.js built-in loader.

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- **Node.js**: v14.x or later
- **npm**: v6.x or later (comes with Node.js)
- **yarn** (optional): If you prefer using Yarn instead of npm.

### Installation

**Clone the repository**:

```
git clone https://github.com/yourusername/sat-transport.git
```

## Navigate to the Project Directory

```
cd sat-transport
```

## Install dependencies:

Using npm:

```
npm install
```

Or using yarn:

```
yarn install
```

## Running the Development Server

To start the development server, run:

```
npm run dev
# or
yarn dev
```

Visit http://localhost:3000 to view the project in your browser. The page will reload as you make edits.

## Building for Production

To create a production build, run:

```
npm run build
# or
yarn build
```

To serve the optimized build locally, run:

```
npm run start
# or
yarn start
```

This will start the application in production mode at http://localhost:3000.

## Linting and Formatting

Run ESLint to check for linting errors:

```
npm run lint
```

The project is configured with ESLint and Prettier for consistent code formatting.

## Environment Variables

To configure environment variables, create a .env.local file at the root of the project. Here’s an example of what you might include:

```
NEXT_PUBLIC_API_URL=https://api.sat-transport.com
```

## Project Structure

Here's a brief overview of the project directory structure:

.
├── components/
│ ├── layout/ # Layout wrapper for the app
│ ├── screens/ # Page-specific components (Home, Services, etc.)
│ ├── ui/ # Reusable UI components (buttons, inputs, etc.)
│ └── ... # Other components
├── constants/
│ └── services.js # Data for services, clients, mission, etc.
├── pages/
│ ├── \_app.js # Custom App component for global setup
│ ├── \_document.js # Custom Document component for SSR
│ ├── index.js # Homepage
│ └── ... # Other pages
├── public/ # Public assets like images, fonts, etc.
├── styles/ # SCSS files

## Deployment

The easiest way to deploy your Next.js application is to use Vercel. Vercel is built by the creators of Next.js and provides seamless integration for deploying Next.js apps.

Follow these steps for deploying on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Sign in to Vercel and import your repository.
3. Configure the environment variables if required.
4. Click "Deploy."

Once deployed, your app will be live on a custom Vercel URL.

## Learn More

To learn more about Next.js, check out these resources:

[Next.js](https://nextjs.org/docs) Documentation - Official documentation for Next.js.
[Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial.

## Contribution

Contributions are welcome! Please follow the code of conduct and open a pull request for any new features or bug fixes.
