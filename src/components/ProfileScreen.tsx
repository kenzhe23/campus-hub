import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProfileMenuItem } from '../components';
import { colors } from '../styles/theme';

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileMenuItem title="Жеке мәліметтер" onPress={() => {}} />
      <ProfileMenuItem title="Хабарландырулар" onPress={() => {}} />
      <ProfileMenuItem title="Баптаулар" onPress={() => {}} />
      <ProfileMenuItem title="Көмек және қолдау" onPress={() => {}} />
      <ProfileMenuItem title="Шығу" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});