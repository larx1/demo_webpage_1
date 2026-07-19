# Android Platform

This directory is reserved for Android-specific native code and configurations.

**Current Setup:** The Android application uses **Expo**, which abstracts away most native Android configuration. The Expo framework handles the build process and generates native code as needed.

**To add native Android code:**
1. Run `expo prebuild --clean` in the `/shared` directory to generate native Android files
2. Platform-specific native code can then be added to the generated Android project

## Running the Android App

From the project root:
```bash
npm run dev:android
```

This starts the Expo dev server with support for physical Android devices and emulators.

**Requirements:**
- Android SDK / Android Emulator
- Java Development Kit (JDK)
