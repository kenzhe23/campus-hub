// src/components/EmptyState.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../styles/theme';

type Props = {
  message?: string;
};

export function EmptyState({ message = 'Деректер табылмады' }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.muted,
    fontSize: 16,
  },
});