import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { useAuth } from '../context/AuthContext';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const { login } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
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
    const success = await login(email, password);
    setLoading(false);

    if (!success) {
      setErrors({ general: 'Invalid email or password' });
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Login</Text>
      
      <InputField
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Name and Email"
        error={errors.email}
        accessibilityLabel="Email input"
      />

      <InputField
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Name and Password"
        secureTextEntry
        error={errors.password}
        accessibilityLabel="Password input"
      />

      {errors.general && (
        <Text style={styles.errorText}>{errors.general}</Text>
      )}

      <Button
        title="Login"
        onPress={handleLogin}
        loading={loading}
        accessibilityLabel="Login button"
      />

      <TouchableOpacity 
        onPress={() => navigation.navigate('SignUp' as never)}
        style={styles.linkContainer}
      >
        <Text style={styles.linkText}>Don't have an Account? Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 32,
  },
  linkContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  linkText: {
    color: '#40B0C0',
    fontSize: 16,
  },
  errorText: {
    color: '#ff4444',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default LoginScreen;