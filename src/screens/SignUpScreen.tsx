import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { useAuth } from '../context/AuthContext';

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation();
  const { signUp } = useAuth();
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;

    setLoading(true);
    const success = await signUp(fullName, email, password);
    setLoading(false);

    if (!success) {
      setErrors({ general: 'Sign up failed. Please try again.' });
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Sign Up</Text>
      
      <InputField
        label="Full Name"
        value={fullName}
        onChangeText={setFullName}
        placeholder="Name and password"
        error={errors.fullName}
        accessibilityLabel="Full name input"
      />

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
        title="Sign Up"
        onPress={handleSignUp}
        loading={loading}
        accessibilityLabel="Sign up button"
      />

      <TouchableOpacity 
        onPress={() => navigation.navigate('Login' as never)}
        style={styles.linkContainer}
      >
        <Text style={styles.linkText}>Have an Account? Sign In</Text>
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

export default SignUpScreen;