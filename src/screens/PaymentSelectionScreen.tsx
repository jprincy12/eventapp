import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';

const PaymentSelectionScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleESewaSelect = () => {
    navigation.navigate('PaymentLogin' as never);
  };

  const handleBankSelect = () => {
    // Navigate to bank payment flow
    navigation.navigate('PaymentLogin' as never);
  };

  return (
    <View style={styles.container}>
      <Header title="Payment" />
      
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.paymentCard}
          onPress={handleESewaSelect}
          accessibilityLabel="Select eSewa payment method"
        >
          <Text style={styles.paymentTitle}>eSewa</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.paymentCard}
          onPress={handleBankSelect}
          accessibilityLabel="Select bank payment method"
        >
          <Text style={styles.paymentTitle}>Bank</Text>
        </TouchableOpacity>
      </View>
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
    padding: 24,
    gap: 16,
  },
  paymentCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    minHeight: 120,
  },
  paymentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default PaymentSelectionScreen;