import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../styles/theme';

type Props = {
  title: string;
  onPress?: () => void;
};

export function ProfileMenuItem({ title, onPress }: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
});