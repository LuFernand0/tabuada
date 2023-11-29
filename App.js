import { SafeAreaView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [valor, setValor] = useState('');
  const [resultados, setResultados] = useState([]);

  function calcular() {
    const numero = parseInt(valor);

    if (isNaN(numero)) {
      alert('Insira um número válido');
      setValor('');
      setResultados([]);
      return;
    }

    const novosResultados = [];
    for (let i = 0; i <= 10; i++) {
      const resultado = numero * i;
      novosResultados.push(`${numero} x ${i} = ${resultado}`);
    }

    setResultados(novosResultados);
  }


  return (
    <SafeAreaView style={estilo.container}>
      <TextInput
        style={estilo.input}
        placeholder='Insira um número'
        placeholderTextColor='#0008'
        value={valor}
        onChangeText={(texto) => setValor(texto)}
      />
      <TouchableOpacity style={estilo.botao} onPress={calcular}>Calcular</TouchableOpacity>
      {resultados.map((resultado, index) => (
        <Text key={index} style={estilo.resultado}>
          {resultado}
        </Text>
      ))}
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: "brown"
  },
  botao: {
    backgroundColor: '#000',
    color: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 3,
    marginTop: 5,
    borderRadius: 7
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 10,
    outline: 'none'
  },
  resultado: {
    fontSize: 14,
    fontWeight: 500,
    marginTop: 10,
    color: '#fff'
  }
})