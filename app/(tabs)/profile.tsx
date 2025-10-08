import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const handleLogout = () => {
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      
      <View style={styles.profileCard}>
        <Text style={styles.infoLabel}>Name</Text>
        <Text style={styles.infoValue}>ABC</Text>
        
        <Text style={styles.infoLabel}>Email</Text>
        <Text style={styles.infoValue}>ABC@example.com</Text>
        
        <Text style={styles.infoLabel}>Tickets Booked</Text>
        <Text style={styles.infoValue}>3</Text>
      </View>
      
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
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
  profileCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
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
  infoLabel: {
    fontSize: 14,
    color: '#999',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: '#000',
    marginBottom: 16,
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});