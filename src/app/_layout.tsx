import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#f8fafc' }, headerShadowVisible: false }}>
      <Stack.Screen 
        name="index" 
        options={{ title: 'Team Directory' }} 
      />
    </Stack>
  );
}