import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import ProductCard from './ProductCard';

export default function HelloWorld() {
  const { colors, scheme, mode, setMode } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.textPrimary }]}>Hello World</Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Cross-Platform App</Text>
      <Text style={[styles.platform, { color: colors.textMuted }]}>Rendered on all platforms</Text>

      <View style={styles.products}>
        <ProductCard name="Wireless Headphones" price={99.99} discountPercent={20} />
        <ProductCard name="Smart Watch" price={149.99} />
      </View>

      <Pressable
        style={[styles.toggle, { backgroundColor: colors.primary }]}
        onPress={() => setMode(mode === 'dark' ? 'light' : mode === 'light' ? 'system' : 'dark')}
      >
        <Text style={[styles.toggleText, { color: colors.primaryText }]}>
          Theme: {mode} ({scheme})
        </Text>
      </Pressable>
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
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  platform: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 24,
  },
  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
    marginBottom: 24,
  },
  toggle: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  toggleText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
