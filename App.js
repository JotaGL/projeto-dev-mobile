import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Lny & Nós</Text>

      <Text style={styles.inputText}>Nome:</Text>
      <TextInput style={styles.input}
        defaultValue="Digite seu Nome..."
      />

      <Text style={styles.inputText}>E-mail:</Text>
      <TextInput style={styles.input}
        defaultValue="Digite seu E-mail..."
      />

      <Text style={styles.inputText}>Senha:</Text>
      <TextInput style={styles.input}
        defaultValue="Digite sua Senha..."
      />

      <Text style={styles.inputText}>Confirmar Senha:</Text>
      <TextInput style={styles.input}
        defaultValue="Digite sua Senha Novamente..."
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '24%',
    height: '15%',
  },
  title: {
    fontSize: 45,
    marginBottom: 30
  },
  input: {
    backgroundColor: "#E7E0DD",
    width: "70%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  inputText: {
    color: "#151515",
    fontSize: 25,
    alignSelf: 'flex-start',
    textAlign: "center",
    marginLeft: 63
  },
  button: {
    backgroundColor: "#BA7868",
    width: "70%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 20
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
  }
})
