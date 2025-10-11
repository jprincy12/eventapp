import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CategoryChipsProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategoryChips: React.FC<CategoryChipsProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.chip,
            selectedCategory === category && styles.chipSelected,
          ]}
          onPress={() => onCategorySelect(category)}
          accessibilityLabel={`Filter by ${category}`}
        >
          <Text
            style={[
              styles.chipText,
              selectedCategory === category && styles.chipTextSelected,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: '#f5f5f5',
    marginRight: 8,
  },
  chipSelected: {
    backgroundColor: '#40B0C0',
  },
  chipText: {
    color: '#666',
    fontSize: 14,
    fontWeight: '500',
  },
  chipTextSelected: {
    color: '#fff',
  },
});

export default CategoryChips;