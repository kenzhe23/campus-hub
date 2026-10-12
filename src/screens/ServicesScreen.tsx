import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { SectionTitle } from '../components/SectionTitle';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/services';
import { Service } from '../types/Service';
import { colors, spacing } from '../styles/theme';

type Props = {
  navigation: any;
};

export function ServicesScreen({ navigation }: Props) {
  const openService = (service: Service) => {
    // Навигация логикасы
  };

  return (
    <View style={styles.container}>
      <SectionTitle 
        title="Services" 
        subtitle="Everything you need in one place." 
      />
      <FlatList 
        data={services} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ServiceCard service={item} onPress={openService} />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  listContainer: {
    paddingBottom: spacing.lg,
  },
});