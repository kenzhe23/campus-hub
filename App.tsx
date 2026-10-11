import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LoginCard } from './src/components/LoginCard';
import { ServiceCard } from './src/components/ServiceCard';
import { services } from './src/data/services';
import {
  lightTheme,
  darkTheme,
  spacing,
  radius,
  fontSize,
} from './src/theme';

export default function App() {
  const [user, setUser] = useState<string | null>(null);
  const [dark, setDark] = useState(false);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(['3', '7']);

  const theme = dark ? darkTheme : lightTheme;

  const { width } = useWindowDimensions();
  const columns = width >= 700 ? 3 : 2;
  const cardWidth = (width - 40 - 12 * (columns - 1)) / columns;

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  if (!user) {
    return <LoginCard onSuccess={setUser} theme={theme} />;
  }

  const visibleServices = showOnlyFavorites
    ? services.filter((s) => favorites.includes(s.id))
    : services;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.bg }]}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <Text style={[styles.welcome, { color: theme.primary }]}>
              Қош келдіңіз, {user}!
            </Text>
            <Text style={[styles.title, { color: theme.text }]}>
              Кампус сервистері
            </Text>
          </View>

          <Pressable
            onPress={() => setDark((v) => !v)}
            style={[
              styles.iconBtn,
              { borderColor: theme.border, backgroundColor: theme.card },
            ]}
          >
            <Ionicons
              name={dark ? 'sunny-outline' : 'moon-outline'}
              size={22}
              color={theme.primary}
            />
          </Pressable>
        </View>

        <Text style={[styles.subtitle, { color: theme.muted }]}>
          Қажетті сервисті таңдаңыз
        </Text>

        <Pressable
          style={[
            styles.filter,
            { borderColor: theme.border, backgroundColor: theme.card },
            showOnlyFavorites && {
              backgroundColor: theme.primary,
              borderColor: theme.primary,
            },
          ]}
          onPress={() => setShowOnlyFavorites((v) => !v)}
        >
          <Ionicons
            name={showOnlyFavorites ? 'star' : 'star-outline'}
            size={18}
            color={showOnlyFavorites ? '#FFFFFF' : theme.primary}
          />
          <Text
            style={[
              styles.filterText,
              { color: showOnlyFavorites ? '#FFFFFF' : theme.primary },
            ]}
          >
            {showOnlyFavorites ? 'Тек таңдаулылар' : 'Барлығын көрсету'}
          </Text>
        </Pressable>

        <View style={styles.grid}>
          {visibleServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              width={cardWidth}
              theme={theme}
              isFavorite={favorites.includes(service.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </View>

        {visibleServices.length === 0 && (
          <View style={styles.empty}>
            <Ionicons name="star-outline" size={48} color={theme.muted} />
            <Text style={{ color: theme.muted, marginTop: spacing.sm }}>
              Таңдаулы карточкалар жоқ
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { padding: spacing.xl },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcome: {
    fontSize: fontSize.md,
    fontWeight: '700',
  },
  title: {
    fontSize: fontSize.xxl,
    fontWeight: '800',
    marginTop: spacing.xs,
  },
  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: fontSize.md,
    marginTop: 6,
    marginBottom: spacing.lg,
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    borderWidth: 1,
    alignSelf: 'flex-start',
    marginBottom: spacing.lg,
  },
  filterText: {
    fontWeight: '700',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  empty: {
    alignItems: 'center',
    marginTop: spacing.xxl,
  },
});