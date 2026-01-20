# GFC Eden - Church Website

## Overview

GFC Eden (God's Family Church Eden) is a church website built with a React frontend and Express backend. The application provides a public-facing website for church members and visitors to access information about sermons, events, ministries, and contact details. It features a modern, responsive design with smooth animations and a clean user interface using the church's brand colors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and scroll effects
- **Build Tool**: Vite

The frontend follows a page-based structure with shared components:
- Pages live in `client/src/pages/`
- Reusable components in `client/src/components/`
- Custom hooks in `client/src/hooks/`
- UI primitives from shadcn in `client/src/components/ui/`

### Backend Architecture
- **Framework**: Express.js 5 with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **API Style**: RESTful JSON APIs under `/api/*` prefix
- **Schema Validation**: Zod for request/response validation
- **Shared Types**: Types and schemas shared between frontend and backend via `shared/` directory

The backend serves both the API and static files:
- Development: Vite dev server middleware for HMR
- Production: Static file serving from `dist/public/`

### Data Models
Three main entities defined in `shared/schema.ts`:
- **Sermons**: Church sermon recordings with title, preacher, date, video URL, description, series, and image
- **Events**: Upcoming church events with title, date, location, description, and image
- **Ministries**: Church ministry groups with name, description, leader, meeting time, and image

### API Structure
Routes defined in `shared/routes.ts` and implemented in `server/routes.ts`:
- `GET /api/sermons` - List all sermons
- `GET /api/sermons/:id` - Get single sermon
- `GET /api/events` - List all events
- `GET /api/ministries` - List all ministries

### Build System
Custom build script (`script/build.ts`) that:
- Builds frontend with Vite to `dist/public/`
- Bundles server with esbuild to `dist/index.cjs`
- Selectively bundles server dependencies from an allowlist for faster cold starts

## External Dependencies

### Database
- **PostgreSQL**: Primary database via `DATABASE_URL` environment variable
- **Drizzle ORM**: Database access and migrations
- **connect-pg-simple**: PostgreSQL session storage (available but not currently used)

### Frontend Libraries
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth transitions
- **lucide-react**: Icon library
- **date-fns**: Date formatting utilities
- **Radix UI**: Accessible UI primitives (accordion, dialog, dropdown, etc.)
- **embla-carousel-react**: Carousel component
- **react-hook-form** with **zod**: Form handling and validation

### Development Tools
- **Vite**: Frontend build tool with HMR
- **esbuild**: Server bundling
- **drizzle-kit**: Database migrations (`db:push` command)
- **TypeScript**: Type checking across the entire codebase

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development banner