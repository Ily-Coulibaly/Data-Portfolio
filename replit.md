# Data Portfolio

## Overview

This is a modern, responsive data analyst portfolio website showcasing professional work, skills, and achievements. Built as a full-stack application with React frontend and Express backend, the portfolio features multiple sections including About, Skills, Projects, Articles, Certificates, and a dedicated KYN brand section. The site emphasizes clean design, professional presentation, and interactive elements to effectively showcase data analytics expertise and career progression.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom CSS variables for theming and consistent design system
- **Component Library**: Radix UI primitives with shadcn/ui components for accessibility and polish
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for robust form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Session Management**: Session-based authentication with PostgreSQL session store
- **API Design**: RESTful endpoints with proper error handling and validation
- **Development**: Hot module replacement and development middleware integration

### Data Storage
- **Primary Database**: PostgreSQL hosted on Neon serverless platform
- **ORM**: Drizzle ORM with schema-first approach and automatic migrations
- **Schema Management**: Centralized schema definitions in shared directory
- **Data Validation**: Zod schemas for runtime validation and type inference

### UI/UX Design Patterns
- **Design System**: Dark theme with purple accent colors and neutral base palette
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Component Architecture**: Reusable UI components with consistent styling patterns
- **Navigation**: Fixed header with smooth scroll behavior and section anchoring
- **Animations**: Subtle transitions and hover effects for enhanced user experience

### Content Management
- **Static Assets**: Profile images and documents served through attached assets
- **Dynamic Content**: Portfolio projects, skills, and articles defined in constants
- **Contact Forms**: Server-side processing with email integration capabilities
- **File Downloads**: Resume download functionality with proper content delivery

## External Dependencies

### Core Technology Stack
- **React Ecosystem**: React 18, React DOM, React Hook Form, React Query
- **TypeScript**: Full TypeScript support across frontend and backend
- **Database**: Neon PostgreSQL serverless database with connection pooling
- **ORM**: Drizzle ORM with PostgreSQL dialect and migration support

### UI and Styling
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Styling**: Tailwind CSS for utility-first styling approach
- **Icons**: Lucide React icons and React Icons (Simple Icons) for brand logos
- **Typography**: Inter font family loaded from Google Fonts

### Development and Build Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Development**: TSX for TypeScript execution and hot reloading
- **Code Quality**: ESBuild for production bundling and optimization
- **Runtime Error Handling**: Replit-specific error overlay for development

### Backend Services
- **Database Hosting**: Neon serverless PostgreSQL with automatic scaling
- **Session Storage**: PostgreSQL-based session store with connect-pg-simple
- **Email Integration**: Prepared for email service integration (SendGrid, etc.)
- **File Storage**: Local file system for static assets and downloads

### Utility Libraries
- **Validation**: Zod for schema validation and type inference
- **Date Handling**: date-fns for date manipulation and formatting
- **Styling Utilities**: clsx and class-variance-authority for conditional classes
- **Development**: Various development tools for Replit integration and debugging