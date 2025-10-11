import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import { Ticket } from '../types';

const TicketScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { ticket } = route.params as { ticket: Ticket };

  const handleDownload = () => {
    // Simulate download functionality
    alert('Ticket downloaded successfully!');
  };

  const handleGoHome = () => {
    navigation.navigate('MainDrawer' as never);
  };

  return (
    <View style={styles.container}>
      <Header title="Your Ticket" />
      
      <View style={styles.content}>
        <View style={styles.ticketCard}>
          <Text style={styles.ticketTitle}>{ticket.eventName}</Text>
          <Text style={styles.ticketNumber}>Ticket #: {ticket.ticketNumber}</Text>
          <Text style={styles.ticketDetail}>Purchased by: {ticket.userName}</Text>
          <Text style={styles.ticketDetail}>
            Date: {new Date(ticket.purchaseDate).toLocaleDateString()}
          </Text>
          <View style={styles.barcode}>
            <Text style={styles.barcodeText}>|| | || | || | || | || | ||</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Download Ticket"
            onPress={handleDownload}
            accessibilityLabel="Download ticket as PDF"
          />
          <Button
            title="Back to Home"
            onPress={handleGoHome}
            variant="secondary"
            accessibilityLabel="Navigate back to home screen"
          />
        </View>
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
    justifyContent: 'space-between',
  },
  ticketCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 24,
    borderWidth: 2,
    borderColor: '#40B0C0',
    borderStyle: 'dashed',
  },
  ticketTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  ticketNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#40B0C0',
    marginBottom: 8,
    textAlign: 'center',
  },
  ticketDetail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    textAlign: 'center',
  },
  barcode: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  barcodeText: {
    fontSize: 18,
    letterSpacing: 4,
    color: '#333',
  },
  buttonContainer: {
    gap: 12,
  },
});

export default TicketScreen;