# Web Platform

This directory contains web-specific files and configurations for the cross-platform app.

**Current Setup:** The web application is built using **Expo Web**, which shares the same React Native codebase from the `/shared` directory. The compiled web build output is available here after running:

```bash
npm run build:web
```

**Note:** With Expo, the web build is managed from the `/shared` directory. Platform-specific web customizations (if needed) can be placed here.

## Running the Web App

From the project root:
```bash
npm run dev:web
```

This starts the Expo dev server with web support.
