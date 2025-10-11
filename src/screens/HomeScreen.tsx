import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { RootStackParamList } from '../../App';
import eventsData from '../../data/events.json';
import CategoryChips from '../components/CategoryChips';
import EventCard from '../components/EventCard';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Music', 'Tech', 'Education', 'Art'];

  const filteredEvents = useMemo(() => {
    return eventsData.filter((event: any) => {
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleEventPress = (event: any) => {
    // SAFE: Make sure event is passed correctly
    navigation.navigate('EventDetails', { event });
  };

  const handleMenuPress = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Upcoming Event List" 
        showMenu 
        onMenuPress={handleMenuPress}
      />
      
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search events..."
      />

      <CategoryChips
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard event={item} onPress={handleEventPress} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  listContent: {
    paddingVertical: 8,
  },
});

export default HomeScreen;