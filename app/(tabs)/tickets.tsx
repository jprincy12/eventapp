import { FlatList, StyleSheet, Text, View } from 'react-native';

interface Ticket {
  id: string;
  eventName: string;
  date: string;
  location: string;
  ticketNumber: string;
}

export default function TicketsScreen() {
  const tickets: Ticket[] = [
    {
      id: '1',
      eventName: 'Music Festival',
      date: 'October 21, 2025',
      location: 'San Francisco, CA',
      ticketNumber: 'TKT-001',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tickets</Text>
      
      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.ticketCard}>
            <Text style={styles.eventName}>{item.eventName}</Text>
            <Text style={styles.ticketInfo}>Date: {item.date}</Text>
            <Text style={styles.ticketInfo}>Location: {item.location}</Text>
            <Text style={styles.ticketNumber}>Ticket #: {item.ticketNumber}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  listContent: {
    paddingHorizontal: 16,
  },
  ticketCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  ticketInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  ticketNumber: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
    marginTop: 8,
  },
});