import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UnderConstructionScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Esperamos até a sua proxima visita!</Text>
      <Text>Lny & Nos agradece a preferencia.</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Deslogar</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f5f2', 
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4b3b3a', 
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#BA7868",
    width: "50%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
  }
});

export default UnderConstructionScreen;
