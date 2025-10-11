import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AuthProvider, useAuth } from './src/context/AuthContext';

// Import screens
import EventDetailsScreen from './src/screens/EventDetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import LandingScreen from './src/screens/LandingScreen';
import LoginScreen from './src/screens/LoginScreen';
import PaymentDetailsScreen from './src/screens/PaymentDetailsScreen';
import PaymentLoginScreen from './src/screens/PaymentLoginScreen';
import PaymentSelectionScreen from './src/screens/PaymentSelectionScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import TicketScreen from './src/screens/TicketScreen';

// Define the parameter types for each screen
export type RootStackParamList = {
  Landing: undefined;
  SignUp: undefined;
  Login: undefined;
  Home: undefined;
  EventDetails: { event: any };
  PaymentSelection: undefined;
  PaymentLogin: undefined;
  PaymentDetails: { event: any };
  Ticket: { ticket: any };
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          // Auth screens
          <>
            <Stack.Screen name="Landing" component={LandingScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        ) : (
          // App screens
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
            <Stack.Screen name="PaymentSelection" component={PaymentSelectionScreen} />
            <Stack.Screen name="PaymentLogin" component={PaymentLoginScreen} />
            <Stack.Screen name="PaymentDetails" component={PaymentDetailsScreen} />
            <Stack.Screen name="Ticket" component={TicketScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <Navigation />
    </AuthProvider>
  );
}