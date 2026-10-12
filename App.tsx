import React, { useState } from 'react';
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
import { ServicesScreen } from './src/screens/ServicesScreen';
import { colors, spacing } from './src/styles/theme';

export default function App() {
  const [user, setUser] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'Home' | 'Services' | 'Profile'>('Home');
  const { width } = useWindowDimensions();

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <LoginCard onLogin={(username) => setUser(username)} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Campus Hub</Text>
        <Pressable>
          <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
        </Pressable>
      </View>

      {/* Main Content Area */}
      <View style={styles.content}>
        {activeTab === 'Home' && (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.welcomeCard}>
              <Text style={styles.welcomeSubtitle}>Good morning,</Text>
              <Text style={styles.welcomeTitle}>{user} S.</Text>
              <Text style={styles.welcomeText}>Here's what's happening on campus today.</Text>
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>University Announcements</Text>
              <Text style={styles.seeAll}>See all</Text>
            </View>

            <View style={styles.announcementCard}>
              <Text style={styles.badge}>News</Text>
              <Text style={styles.announcementTitle}>Spring Semester Registration Now Open</Text>
              <Text style={styles.date}>Mar 12, 2024</Text>
            </View>
          </ScrollView>
        )}

        {activeTab === 'Services' && <ServicesScreen navigation={{ navigate: () => {} }} />}

        {activeTab === 'Profile' && (
          <View style={styles.profileContainer}>
            <View style={styles.avatarContainer}>
              <Ionicons name="person" size={50} color={colors.primary} />
            </View>
            <Text style={styles.profileName}>{user} S.</Text>
            <Text style={styles.profileInfo}>Computer Science • Group CS-2026</Text>

            <Pressable style={styles.menuItem} onPress={() => setUser(null)}>
              <Ionicons name="log-out-outline" size={20} color="#EF4444" />
              <Text style={styles.logoutText}>Log Out</Text>
            </Pressable>
          </View>
        )}
      </View>

      {/* Bottom Navigation Tabs */}
      <View style={styles.tabBar}>
        <Pressable 
          style={styles.tabItem} 
          onPress={() => setActiveTab('Home')}
        >
          <Ionicons 
            name="home" 
            size={24} 
            color={activeTab === 'Home' ? colors.primary : colors.muted} 
          />
          <Text style={[styles.tabText, activeTab === 'Home' && styles.activeTabText]}>Home</Text>
        </Pressable>

        <Pressable 
          style={styles.tabItem} 
          onPress={() => setActiveTab('Services')}
        >
          <Ionicons 
            name="grid" 
            size={24} 
            color={activeTab === 'Services' ? colors.primary : colors.muted} 
          />
          <Text style={[styles.tabText, activeTab === 'Services' && styles.activeTabText]}>Services</Text>
        </Pressable>

        <Pressable 
          style={styles.tabItem} 
          onPress={() => setActiveTab('Profile')}
        >
          <Ionicons 
            name="person" 
            size={24} 
            color={activeTab === 'Profile' ? colors.primary : colors.muted} 
          />
          <Text style={[styles.tabText, activeTab === 'Profile' && styles.activeTabText]}>Profile</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
  },
  scrollContent: {
    padding: spacing.md,
  },
  welcomeCard: {
    backgroundColor: '#FFFFFF',
    padding: spacing.md,
    borderRadius: 16,
    marginBottom: spacing.md,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: colors.muted,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginVertical: 4,
  },
  welcomeText: {
    fontSize: 13,
    color: colors.muted,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  seeAll: {
    fontSize: 13,
    color: colors.primary,
  },
  announcementCard: {
    backgroundColor: '#FFFFFF',
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.sm,
  },
  badge: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: 4,
  },
  announcementTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  date: {
    fontSize: 12,
    color: colors.muted,
    marginTop: 6,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: spacing.md,
  },
  avatarContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  profileInfo: {
    fontSize: 14,
    color: colors.muted,
    marginBottom: spacing.lg,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: spacing.md,
    borderRadius: 12,
    marginTop: spacing.sm,
  },
  logoutText: {
    fontSize: 15,
    color: '#EF4444',
    fontWeight: '600',
    marginLeft: spacing.sm,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    justifyContent: 'around',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 11,
    color: colors.muted,
    marginTop: 2,
  },
  activeTabText: {
    color: colors.primary,
    fontWeight: '600',
  },
});