import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import CustomButton from '../components/CustomButton';
import ProfileCard, { Profile } from '../components/ProfileCard';

const MOCK_USERS = [
  { name: 'Alex Rivera', role: 'UI/UX Designer', email: 'alex.rivera@example.com', avatar: 'https://unsplash.com' },
  { name: 'Marcus Chen', role: 'Full Stack Engineer', email: 'marcus.chen@example.com', avatar: 'https://unsplash.com' },
  { name: 'Sarah Jenkins', role: 'Product Manager', email: 'sarah.jenkins@example.com', avatar: 'https://unsplash.com' },
  { name: 'David Kim', role: 'Mobile Developer', email: 'david.kim@example.com', avatar: 'https://unsplash.com' }
];

export default function Page() {
  const [profiles, setProfiles] = useState<Profile[]>([
    {
      id: '1',
      name: 'Samantha Reed',
      role: 'Lead Architect',
      email: 'samantha.reed@example.com',
      avatar: 'https://unsplash.com'
    }
  ]);
  
  const [loading, setLoading] = useState(false);

  const handleAddProfile = () => {
    setLoading(true);
    setTimeout(() => {
      const randomUser = MOCK_USERS[Math.floor(Math.random() * MOCK_USERS.length)];
      const newProfile: Profile = {
        id: Date.now().toString(),
        ...randomUser
      };

      setProfiles((prev) => [newProfile, ...prev]);
      setLoading(false);
    }, 500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Team Directory</Text>
      
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProfileCard profile={item} />}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.buttonContainer}>
        <CustomButton
          title="+ Add New Profile Card"
          onPress={handleAddProfile}
          isLoading={loading}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#111827',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: 'transparent',
  },
});
