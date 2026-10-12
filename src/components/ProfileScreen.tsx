// src/screens/ProfileScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProfileMenuItem } from '../components/ProfileMenuItem';

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileMenuItem title="Personal Information" onPress={() => {}} />
      <ProfileMenuItem title="Notifications" onPress={() => {}} />
      <ProfileMenuItem title="App Settings" onPress={() => {}} />
      <ProfileMenuItem title="Help & Support" onPress={() => {}} />
      <ProfileMenuItem title="Log Out" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
});