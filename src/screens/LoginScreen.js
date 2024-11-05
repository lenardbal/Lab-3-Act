// Import necessary libraries
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* App Logo */}
      <Image source={require('../../assets/bal.jpg')} style={styles.logo} />

      {/* App Name */}
      <Text style={styles.appName}>My App</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="#888" style={styles.icon} />
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#888"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={!showPassword}
          placeholderTextColor="#888"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? "visibility" : "visibility-off"} size={20} color="#888" style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Register and Forgot Password Links */}
      <Text style={styles.linkText}>Don't have an account yet?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerLink}>Register Here</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RecoverPassword')}>
        <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center', // Aligns the icon and input vertically
  },
  input: {
    fontSize: 16,
    color: '#333',
    flex: 1, // Allows the TextInput to fill the remaining space
    paddingVertical: 0, // Removes vertical padding to align with icons
  },
  icon: {
    marginRight: 10, // Space between icon and input
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#9b59b6', // purple button color
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#333',
    fontSize: 14,
    marginTop: 10,
  },
  registerLink: {
    color: '#9b59b6', // purple color for register link
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  forgotPasswordLink: {
    color: '#9b59b6', // purple color for forgot password link
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
