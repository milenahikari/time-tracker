import { Stack } from 'expo-router/stack';

export default function AppLayout() {
  return (
    <Stack screenOptions={{
      contentStyle: {
        backgroundColor: '#070417'
      }
    }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
    </Stack>
  );
}
