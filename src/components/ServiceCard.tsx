import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Service } from '../types/Service';
import { colors, spacing } from '../styles/theme';

type Props = {
  service: Service;
  onPress: (service: Service) => void;
};

export function ServiceCard({ service, onPress }: Props) {
  return (
    <Pressable onPress={() => onPress(service)} style={styles.card}>
      <Text style={styles.title}>{service.title}</Text>
      <Text style={styles.description}>{service.description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.sm,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  description: {
    fontSize: 14,
    color: colors.muted,
    marginTop: 4,
  },
});