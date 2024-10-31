import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UnderConstructionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Esta página está em construção!</Text>
      <Text>Volte mais tarde.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f5f2', // Cor de fundo
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4b3b3a', // Cor do texto
    marginBottom: 10,
  },
});

export default UnderConstructionScreen;
