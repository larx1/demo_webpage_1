import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Text style={styles.subtitle}>Cross-Platform App</Text>
      <Text style={styles.platform}>Rendered on all platforms</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  platform: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
});
