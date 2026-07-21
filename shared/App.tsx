import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HelloWorld from './components/HelloWorld';
import { ThemeProvider, useTheme } from './theme/ThemeContext';

function AppContent() {
  const { colors, scheme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <HelloWorld />
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
