import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../App';
import Button from '../components/Button';
import Header from '../components/Header';

type EventDetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  imagePath: string;
  description: string;
};

type EventDetailsRouteParams = {
  event: Event;
};

const EventDetailsScreen: React.FC = () => {
  const navigation = useNavigation<EventDetailsScreenNavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'EventDetails'>>();
  
  // SAFE: Check if event exists before using it
  const event = route.params?.event || {
    id: '1',
    title: 'Event Not Found',
    date: 'Unknown Date',
    time: 'Unknown Time',
    location: 'Unknown Location',
    category: 'General',
    imagePath: 'https://via.placeholder.com/400x200?text=Event+Not+Found',
    description: 'The event information could not be loaded.'
  };

  const handleReserve = () => {
    navigation.navigate('PaymentSelection');
  };

  const handleMenuPress = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Header 
        title={event.category}
        showMenu 
        onMenuPress={handleMenuPress}
      />
      
      <ScrollView style={styles.content}>
        <Image 
          source={{ uri: event.imagePath }} 
          style={styles.image}
          accessibilityLabel={`Event image for ${event.title}`}
        />
        
        <View style={styles.details}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.date}>{event.date}</Text>
          <Text style={styles.time}>{event.time}</Text>
          <Text style={styles.location}>{event.location}</Text>
          
          <Text style={styles.description}>
            {event.description}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Reserve"
          onPress={handleReserve}
          accessibilityLabel="Reserve tickets for this event"
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
  },
  image: {
    width: '100%',
    height: 250,
  },
  details: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  date: {
    fontSize: 18,
    color: '#666',
    marginBottom: 4,
  },
  time: {
    fontSize: 18,
    color: '#666',
    marginBottom: 4,
  },
  location: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
});

export default EventDetailsScreen;