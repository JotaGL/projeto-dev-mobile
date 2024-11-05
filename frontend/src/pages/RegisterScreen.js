import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import axiosInstance from '../axiosConfig';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro","As senhas não coincidem.")
      return;
    }
    try {
      const response = await axiosInstance.post('/users/register', { 
        name,
        email,
        password,
      });
      console.log(response.data)
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.navigate('Login');
    } catch(error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possivel realizar o cadastro. Tente novamente');
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../src/assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Lny & Nós</Text>

      <View style={styles.formContainer}>
        <Text style={styles.inputText}>Nome:</Text>
        <TextInput 
          style={styles.input}
          placeholder="Digite seu nome..."
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.inputText}>E-mail:</Text>
        <TextInput 
          style={styles.input}
          placeholder="Digite seu e-mail..."
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.inputText}>Senha:</Text>
        <TextInput 
          style={styles.input}
          placeholder="Digite sua senha..."
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.inputText}>Confirmar Senha:</Text>
        <TextInput 
          style={styles.input}
          placeholder="Digite sua senha novamente..."
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastro</Text>
      </TouchableOpacity>

      {/* Aviso para Login */}
      <View style={styles.loginNotice}>
        <Text style={styles.loginNoticeText}>
          Já tem uma conta?{' '}
          <Text 
            style={styles.loginLink} 
            onPress={() => navigation.navigate('Login')}
          >
            Faça Login
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f8f5f2",
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  logo: {
    width: '30%',
    height: undefined,
    aspectRatio: 1,
    marginTop: 120, 
    marginBottom: 20,
  },
  title: {
    fontSize: 45,
    marginBottom: 30,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: "#E7E0DD",
    width: "100%",
    height: 50,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 15,
  },
  inputText: {
    color: "#151515",
    fontSize: 20,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#BA7868",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
  },
  loginNotice: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginNoticeText: {
    color: "#151515",
    fontSize: 18,
  },
  loginLink: {
    color: "#BA7868",
    fontWeight: 'bold',
  },
});