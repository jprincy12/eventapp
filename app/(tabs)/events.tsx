import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Music' | 'Texts' | 'Education';
}

export default function EventsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Music' | 'Texts' | 'Education'>('All');

  const events: Event[] = [
    {
      id: '1',
      title: 'Music Festival',
      date: 'October 21, 2025',
      time: '8:00 PM',
      location: 'San Francisco, CA',
      category: 'Music',
    },
    {
      id: '2',
      title: 'Book Reading Event',
      date: 'October 25, 2025',
      time: '6:00 PM',
      location: 'New York, NY',
      category: 'Texts',
    },
    {
      id: '3',
      title: 'Tech Conference',
      date: 'November 1, 2025',
      time: '9:00 AM',
      location: 'Austin, TX',
      category: 'Education',
    },
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories: ('All' | 'Music' | 'Texts' | 'Education')[] = ['All', 'Music', 'Texts', 'Education'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Music': return 'musical-notes';
      case 'Texts': return 'book';
      case 'Education': return 'school';
      default: return 'calendar';
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Upcoming Events</Text>
          <Text style={styles.subtitle}>Discover amazing events near you</Text>
        </View>
      </View>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search events..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      
      <View style={styles.categoriesContainer}>
        <View style={styles.categoriesContent}>
          {categories.map(category => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonSelected,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Ionicons 
                name={getCategoryIcon(category)} 
                size={14} 
                color={selectedCategory === category ? '#fff' : '#fff'} 
                style={styles.categoryIcon}
              />
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.categoryTextSelected,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Events Count */}
      <View style={styles.eventsCountContainer}>
        <Text style={styles.eventsCountText}>
          {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
        </Text>
      </View>

      {/* Events List */}
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/event-detail/${item.id}`} asChild>
            <TouchableOpacity style={styles.eventCard}>
              <View style={[styles.eventCategoryIndicator, { backgroundColor: '#007AFF' }]} />
              <View style={styles.eventContent}>
                <View style={styles.eventHeader}>
                  <View style={[styles.categoryBadge, { backgroundColor: '#007AFF20' }]}>
                    <Ionicons 
                      name={getCategoryIcon(item.category)} 
                      size={12} 
                      color="#007AFF" 
                    />
                    <Text style={[styles.categoryBadgeText, { color: '#007AFF' }]}>
                      {item.category}
                    </Text>
                  </View>
                </View>
                <Text style={styles.eventTitle}>{item.title}</Text>
                <View style={styles.eventDetails}>
                  <View style={styles.eventDetailRow}>
                    <Ionicons name="calendar-outline" size={14} color="#666" />
                    <Text style={styles.eventDetailText}>{item.date}</Text>
                  </View>
                  <View style={styles.eventDetailRow}>
                    <Ionicons name="time-outline" size={14} color="#666" />
                    <Text style={styles.eventDetailText}>{item.time}</Text>
                  </View>
                  <View style={styles.eventDetailRow}>
                    <Ionicons name="location-outline" size={14} color="#666" />
                    <Text style={styles.eventDetailText}>{item.location}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.eventArrow}>
                <Ionicons name="chevron-forward" size={16} color="#999" />
              </View>
            </TouchableOpacity>
          </Link>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.eventsListContent}
        style={styles.eventsList}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Ionicons name="calendar-outline" size={64} color="#e0e0e0" />
            <Text style={styles.emptyStateTitle}>No events found</Text>
            <Text style={styles.emptyStateText}>
              Try adjusting your search or filter criteria
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  headerContent: {
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  searchContainer: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 12,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1a1a1a',
  },
  // Updated Compact Vertical Categories
  categoriesContainer: {
    paddingHorizontal: 24,
    paddingBottom: 8,
  },
  categoriesContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 4,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderRadius: 8,
    marginHorizontal: 2,
  },
  categoryButtonSelected: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  categoryIcon: {
    marginRight: 4,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  categoryTextSelected: {
    color: '#fff',
  },
  eventsCountContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  eventsCountText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  eventsList: {
    flex: 1,
  },
  eventsListContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  eventCategoryIndicator: {
    width: 4,
    height: '100%',
  },
  eventContent: {
    flex: 1,
    padding: 16,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  categoryBadgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  eventDetails: {
    gap: 8,
  },
  eventDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  eventDetailText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  eventArrow: {
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    lineHeight: 20,
  },
});