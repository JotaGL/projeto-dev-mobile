import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo da empresa */}
      <Image
        source={require("../../src/assets/logo.png")}
        style={styles.logo}
      />

      {/* Nome da empresa */}
      <Text style={styles.title}>Lny & Nós</Text>

      {/* Descrição da empresa */}
      <Text style={styles.description}>
        Bem-vindo à Lny & Nós! Somos uma empresa de macrames dedicada a fornecer produtos de alta qualidade para nossos clientes. Explore nossos produtos e descubra o que temos para oferecer.
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f8f5f2",
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  logo: {
    width: '40%',
    height: undefined,
    aspectRatio: 1,
    marginTop: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#BA7868",
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 24,
    color: "#151515",
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#BA7868",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
