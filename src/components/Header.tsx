import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HeaderProps {
  title: string;
  onMenuPress?: () => void;
  showMenu?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, onMenuPress, showMenu = false }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {showMenu && (
        <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  menuButton: {
    position: 'absolute',
    right: 16,
    padding: 8,
  },
  menuIcon: {
    fontSize: 20,
    color: '#333',
  },
});

export default Header;