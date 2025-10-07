import { Stack } from 'expo-router';

export default function PaymentLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Payment' }} />
      <Stack.Screen name="success" options={{ title: 'Payment Success', headerShown: false }} />
    </Stack>
  );
}