# Demo Webpage - Cross-Platform Monorepo

A full-stack cross-platform application using **React Native + Expo** for maximum code reuse across Web, Android, and iOS, with a Node.js backend API.

## Project Structure

```
demo-webpage-monorepo/
├── shared/              # Shared React Native/Expo app (compiles to all platforms)
│   ├── components/      # Reusable UI components
│   ├── App.tsx          # Main app component
│   ├── app.json         # Expo configuration
│   └── package.json
├── backend/             # Node.js/Express API server
│   ├── src/
│   │   └── index.js     # Server entry point
│   └── package.json
├── web/                 # Web platform artifacts (Expo Web)
├── android/             # Android platform (Expo manages this)
├── ios/                 # iOS platform (Expo manages this)
├── package.json         # Root monorepo configuration
└── CLAUDE.md            # Claude Code guidance
```

## Quick Start

### 1. Install Dependencies
```bash
npm run install:all
```

### 2. Run the App

**Web (Browser):**
```bash
npm run dev:web
```
Opens http://localhost:19006 with the Expo dev client

**Android:**
```bash
npm run dev:android
```

**iOS (macOS only):**
```bash
npm run dev:ios
```

**Backend API:**
```bash
npm run dev:backend
```
Runs on http://localhost:3000

## Features

✅ **Code Reuse:** Write once, run everywhere - same code compiles to Web, Android, and iOS  
✅ **React Native:** Use React Native components with automatic platform targeting  
✅ **Expo:** Managed build service handling all platform compilation  
✅ **TypeScript:** Full type safety across the stack  
✅ **Backend API:** Express server ready for integration  
✅ **Hot Reload:** Instant feedback during development  

## Technology Stack

- **Frontend:** React Native + Expo + TypeScript
- **Backend:** Node.js + Express
- **Package Manager:** npm with workspaces

## Current Status

**Completed:**
- ✅ Monorepo structure with npm workspaces
- ✅ Expo setup for all three platforms (Web, Android, iOS)
- ✅ Shared "Hello World" component rendering on all platforms
- ✅ Basic Node.js backend server with API endpoints
- ✅ TypeScript configuration
- ✅ Development scripts

## Next Steps

- Add more shared components
- Integrate frontend with backend API
- Add platform-specific native code (if needed)
- Configure app icon and splash screens
- Set up CI/CD pipeline

## Documentation

See [CLAUDE.md](./CLAUDE.md) for detailed development guidance.

## Architecture Philosophy

This monorepo follows the principle of **maximum code reuse**:
- Core UI logic written in React Native (once)
- Automatically compiled to native Web (React), Android, and iOS
- Platform-specific code avoided unless necessary
- Shared business logic and components in `/shared`
- Backend API in `/backend` (framework-agnostic)
