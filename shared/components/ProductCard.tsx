import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

type ProductCardProps = {
  name: string;
  price: number;
  discountPercent?: number;
};

export default function ProductCard({ name, price, discountPercent }: ProductCardProps) {
  const { colors } = useTheme();
  const hasDiscount = !!discountPercent && discountPercent > 0;
  const discountedPrice = hasDiscount ? price * (1 - discountPercent! / 100) : price;

  return (
    <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      {hasDiscount && (
        <View style={[styles.badge, { backgroundColor: colors.discountBackground }]}>
          <Text style={[styles.badgeText, { color: colors.discountText }]}>-{discountPercent}%</Text>
        </View>
      )}
      <Text style={[styles.name, { color: colors.textPrimary }]}>{name}</Text>
      <View style={styles.priceRow}>
        <Text style={[styles.price, { color: colors.price }]}>${discountedPrice.toFixed(2)}</Text>
        {hasDiscount && (
          <Text style={[styles.originalPrice, { color: colors.textMuted }]}>${price.toFixed(2)}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    minWidth: 180,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
});
