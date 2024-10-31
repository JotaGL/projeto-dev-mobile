import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../src/assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Lny & Nós</Text>

      <Text style={styles.inputText}>E-mail:</Text>
      <TextInput 
        style={styles.input}
        placeholder="Digite seu e-mail..."
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.inputText}>Senha:</Text>
      <TextInput 
        style={styles.input}
        placeholder="Digite sua senha..."
        secureTextEntry
      />

      {/* Botão de Login */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Main')} // Adiciona navegação para a tela principal
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Aviso para se registrar caso não tenha conta */}
      <View style={styles.registerNotice}>
        <Text style={styles.registerNoticeText}>
          Não tem uma conta?{' '}
          <Text 
            style={styles.registerLink} 
            onPress={() => navigation.navigate('Register')}
          >
            Registre-se
          </Text>
        </Text>
      </View>

      <View style={styles.spacer} />
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
    marginTop: 120,  // Define um valor fixo para alinhar com a tela de Registro
    marginBottom: 20,
  },
  title: {
    fontSize: 45,
    marginBottom: 30,
    textAlign: 'center',
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
  registerNotice: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerNoticeText: {
    color: "#151515",
    fontSize: 18,
  },
  registerLink: {
    color: "#BA7868",
    fontWeight: 'bold',
  },
  spacer: {
    flex: 1, 
  },
});
