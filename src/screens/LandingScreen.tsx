import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

const LandingScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event App</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp' as never)}
          variant="primary"
          accessibilityLabel="Navigate to Sign Up screen"
        />
        <Button
          title="Sign In"
          onPress={() => navigation.navigate('Login' as never)}
          variant="secondary"
          accessibilityLabel="Navigate to Sign In screen"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#40B0C0',
    marginBottom: 48,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
});

export default LandingScreen;