import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import InputField from '../components/InputField';

const PaymentLoginScreen: React.FC = () => {
  const navigation = useNavigation();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setLoading(true);
    // Simulate payment login
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('PaymentDetails' as never);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Header title="eSewa Login" />
      
      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <InputField
          label="Username"
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your eSewa username"
          error={errors.username}
          accessibilityLabel="eSewa username input"
        />

        <InputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your eSewa password"
          secureTextEntry
          error={errors.password}
          accessibilityLabel="eSewa password input"
        />

        <Button
          title="Login"
          onPress={handleLogin}
          loading={loading}
          accessibilityLabel="Login to eSewa"
        />
      </ScrollView>
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
  scrollContent: {
    padding: 24,
  },
});

export default PaymentLoginScreen;