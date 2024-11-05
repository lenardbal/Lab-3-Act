import React from 'react';
import { View, StyleSheet } from 'react-native';
import RecoverPasswordForm from '../components/RecoverPasswordForm';

const RecoverPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <RecoverPasswordForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecoverPasswordScreen;
