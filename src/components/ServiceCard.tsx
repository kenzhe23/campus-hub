import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Service } from '../types/Service';
import { Theme, spacing, radius, fontSize } from '../theme';

type CardProps = {
  service: Service;
  width: number;
  theme: Theme;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
};

export function ServiceCard({
  service,
  width,
  theme,
  isFavorite,
  onToggleFavorite,
}: CardProps) {
  const status = service.status ?? 'default';
  const isUnavailable = status === 'unavailable';

  return (
    <Pressable
      disabled={isUnavailable}
      onPress={() => !isUnavailable && onToggleFavorite(service.id)}
      style={({ pressed }) => [
        styles.card,
        { width, backgroundColor: service.color },
        isUnavailable && styles.cardUnavailable,
        pressed && !isUnavailable && styles.cardPressed,
      ]}
    >
      {status === 'new' && (
        <View style={[styles.badge, { backgroundColor: theme.badgeNew }]}>
          <Text style={styles.badgeText}>ЖАҢА</Text>
        </View>
      )}
      {isFavorite && (
        <View style={[styles.badge, { backgroundColor: theme.badgeFav }]}>
          <Text style={styles.badgeText}>★</Text>
        </View>
      )}

      {/* ← Ionicons иконка */}
      <View style={styles.iconWrap}>
        <Ionicons
          name={service.icon as any}
          size={36}
          color={service.iconColor}
        />
      </View>

      <Text style={[styles.cardTitle, { color: theme.text }]}>
        {service.title}
      </Text>
      <Text style={[styles.description, { color: theme.muted }]}>
        {service.description}
      </Text>

      {isUnavailable && (
        <Text style={[styles.unavailableText, { color: theme.error }]}>
          Қолжетімсіз
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 170,
    padding: spacing.lg,
    borderRadius: radius.lg,
    justifyContent: 'space-between',
    shadowColor: '#092B55',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },
  cardUnavailable: {
    opacity: 0.45,
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radius.sm,
    zIndex: 1,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#092B55',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: fontSize.lg,
    fontWeight: '700',
    marginTop: spacing.sm,
  },
  description: {
    fontSize: fontSize.sm,
    lineHeight: 20,
  },
  unavailableText: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: spacing.xs,
  },
});