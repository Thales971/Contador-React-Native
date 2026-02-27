//app contador
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(prev => prev + 1);
  };

  const diminuir = () => {
    setContador(prev => prev - 1);
  };

  const resetar = () => {
    setContador(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador Digital</Text>
      <Text style={styles.numero}>{contador}</Text>

      <View style={styles.linhaDeBotoes}>
        <TouchableOpacity onPress={diminuir} style={[styles.botao, styles.botaoDiminuir]}>
          <Text style={styles.botaoTexto}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetar} style={[styles.botao, styles.botaoReset]}>
          <Text style={styles.botaoTexto}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={aumentar} style={[styles.botao, styles.botaoAumentar]}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

//estilos DO CONTADOR
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 10,
  },
  numero: {
    fontSize: 48,
    marginBottom: 20,
  },
  linhaDeBotoes: {
    flexDirection: 'row',
    gap: 20,
  },
  botao: {
    padding: 10,
    borderRadius: 5,
    minWidth: 60,
    alignItems: 'center',
  },
  botaoDiminuir: {
    backgroundColor: '#ff3333',
  },
  botaoAumentar: {
    backgroundColor: '#33cc33',
  },
  botaoReset: {
    backgroundColor: '#555555',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 24,
  },
});

