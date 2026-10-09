import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Explicitly exporting the interface solves the original Line 4 TypeScript error
export interface Profile {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar: string;
}

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: profile.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.role}>{profile.role}</Text>
        <Text style={styles.email}>{profile.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e1e1e1',
  },
  info: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  role: {
    fontSize: 14,
    color: '#4b5563',
    marginVertical: 2,
  },
  email: {
    fontSize: 12,
    color: '#9ca3af',
  },
});
