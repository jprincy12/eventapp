import { Stack } from 'expo-router';
import React from 'react';

export default function PaymentLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Complete Your Purchase',
          headerTitleAlign: 'center',
        }} 
      />
      <Stack.Screen 
        name="eSewaLogin" 
        options={{ 
          title: 'eSewa Secure Payment',
          headerTitleAlign: 'center',
        }} 
      />
      <Stack.Screen 
        name="success" 
        options={{ 
          title: 'Purchase Confirmed',
          headerTitleAlign: 'center',
          headerBackVisible: false,
        }} 
      />
    </Stack>
  );
}