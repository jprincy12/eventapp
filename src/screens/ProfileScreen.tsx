import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';
import { Ticket } from '../types';

const ProfileScreen: React.FC = () => {
  const { user, tickets, logout } = useAuth();

  const renderTicketItem = ({ item }: { item: Ticket }) => (
    <View style={styles.ticketItem}>
      <Text style={styles.ticketEvent}>{item.eventName}</Text>
      <Text style={styles.ticketNumber}>{item.ticketNumber}</Text>
      <Text style={styles.ticketDate}>
        {new Date(item.purchaseDate).toLocaleDateString()}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title={user ? user.fullName : 'Profile'} />
      
      <View style={styles.content}>
        {user && (
          <View style={styles.profileSection}>
            <Text style={styles.profileTitle}>Profile Information</Text>
            <Text style={styles.profileDetail}>Name: {user.fullName}</Text>
            <Text style={styles.profileDetail}>Email: {user.email}</Text>
          </View>
        )}

        <View style={styles.ticketsSection}>
          <Text style={styles.ticketsTitle}>My Tickets ({tickets.length})</Text>
          {tickets.length > 0 ? (
            <FlatList
              data={tickets}
              keyExtractor={(item) => item.id}
              renderItem={renderTicketItem}
              style={styles.ticketsList}
            />
          ) : (
            <Text style={styles.noTickets}>No tickets purchased yet</Text>
          )}
        </View>

        <Button
          title="Logout"
          onPress={logout}
          variant="secondary"
          accessibilityLabel="Logout from the app"
        />
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
    gap: 24,
  },
  profileSection: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  profileDetail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  ticketsSection: {
    flex: 1,
  },
  ticketsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  ticketsList: {
    flex: 1,
  },
  ticketItem: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  ticketEvent: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  ticketNumber: {
    fontSize: 14,
    color: '#40B0C0',
    marginBottom: 2,
  },
  ticketDate: {
    fontSize: 12,
    color: '#666',
  },
  noTickets: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 24,
  },
});

export default ProfileScreen;