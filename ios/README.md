# iOS Platform

This directory is reserved for iOS-specific native code and configurations.

**Current Setup:** The iOS application uses **Expo**, which abstracts away most native iOS configuration. The Expo framework handles the build process and generates native code as needed.

**To add native iOS code:**
1. Run `expo prebuild --clean` in the `/shared` directory to generate native iOS files
2. Platform-specific native code can then be added to the generated iOS project

## Running the iOS App

From the project root:
```bash
npm run dev:ios
```

This starts the Expo dev server with support for iOS simulators and physical devices.

**Requirements:**
- macOS (iOS development only works on macOS)
- Xcode
- CocoaPods
