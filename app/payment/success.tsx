import { router } from 'expo-router';
import React from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function PaymentSuccessScreen() {
  const handleDownload = () => {
    Alert.alert('Success', 'Ticket downloaded successfully!');
  };

  const handleBackToEvents = () => {
    router.replace('/(tabs)/events');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.successIcon}>
        <Text style={styles.successIconText}>✓</Text>
      </View>
      
      <Text style={styles.title}>Payment Successful!</Text>
      <Text style={styles.subtitle}>Your ticket has been reserved</Text>
      
      <View style={styles.ticketCard}>
        <Text style={styles.eventName}>Music Festival</Text>
        <Text style={styles.ticketInfo}>Name: PC</Text>
        <Text style={styles.ticketInfo}>Ticket No: 123</Text>
        <Text style={styles.ticketInfo}>Date: October 21, 2025</Text>
        <Text style={styles.ticketInfo}>Time: 8:00 PM</Text>
        <Text style={styles.ticketInfo}>Location: San Francisco, CA</Text>
      </View>
      
      <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
        <Text style={styles.downloadButtonText}>Download Ticket</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.backButton} onPress={handleBackToEvents}>
        <Text style={styles.backButtonText}>Back to Events</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#34C759',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  successIconText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  ticketCard: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF',
    borderStyle: 'dashed',
    marginBottom: 30,
  },
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  ticketInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  downloadButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
});