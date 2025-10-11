import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../App';
import Button from '../components/Button';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';

type PaymentDetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Remove unused PaymentDetailsRouteParams type

const PaymentDetailsScreen: React.FC = () => {
  const navigation = useNavigation<PaymentDetailsScreenNavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'PaymentDetails'>>();
  const { addTicket, user } = useAuth();
  const [loading, setLoading] = useState(false);

  // SAFE: Check if event exists before using it
  const event = route.params?.event || {
    id: '1',
    title: 'Unknown Event',
    date: 'Unknown Date',
    time: 'Unknown Time',
    location: 'Unknown Location'
  };

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      // Generate ticket
      const ticket = {
        id: Math.random().toString(36).substr(2, 9),
        eventId: event.id,
        eventName: event.title,
        userName: user?.fullName || 'User',
        ticketNumber: `TKT-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
        purchaseDate: new Date().toISOString(),
      };

      addTicket(ticket);
      navigation.navigate('Ticket', { ticket });
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Header title="Payment Details" />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <View style={styles.accountInfo}>
          <Text style={styles.accountTitle}>Account Information</Text>
          <Text style={styles.accountDetail}>Account: 9800000000</Text>
          <Text style={styles.accountDetail}>Balance: $100.00</Text>
        </View>

        <View style={styles.paymentSummary}>
          <Text style={styles.summaryTitle}>Payment Summary</Text>
          <Text style={styles.summaryDetail}>Event: {event.title}</Text>
          <Text style={styles.summaryDetail}>Amount: $25.00</Text>
          <Text style={styles.summaryDetail}>Fee: $1.00</Text>
          <Text style={styles.summaryTotal}>Total: $26.00</Text>
        </View>

        <Button
          title="Pay Now"
          onPress={handlePayment}
          loading={loading}
          accessibilityLabel="Complete payment"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    gap: 24,
  },
  accountInfo: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  accountTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  accountDetail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  paymentSummary: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  summaryDetail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  summaryTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#40B0C0',
    marginTop: 8,
  },
});

export default PaymentDetailsScreen;