import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    try {
      let texto = '';
      let pesoNum = parseFloat(peso);
      let alturaNum = parseFloat(altura);
      const imc = pesoNum / Math.pow(alturaNum, 2);
      if (imc < 18.5) {
        texto = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc <= 24.9) {
        texto = 'Peso normal';
      } else if (imc >= 25 && imc <= 29.9) {
        texto = 'Pré obesidade';
      } else if (imc >= 30 && imc <= 34.9) {
        texto = 'Obesidade grau 1';
      } else if (imc >= 35 && imc <= 39.9) {
        texto = 'Obesidade grau 2';
      } else {
        texto = 'Valor indefinido';
      }
      setResultado(texto);
    } catch (error) {
      Alert.alert('Erro durante o cálculo');  
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoTitulo1} >App cálculo de IMC</Text>
      <Image source={require('./assets/flexoes.png')} />
      <TextInput 
        style={styles.caixaTexto1} 
        placeholder="Altura: 1.80" 
        keyboardType='default' 
        onChangeText={ (value) => setAltura(value) } 
      />
      <TextInput 
        style={styles.caixaTexto1} 
        placeholder="Peso: 80" 
        keyboardType='default' 
        onChangeText={ (value) => setPeso(value) } 
      />
      <Button onPress={calcular} title="Calcular" />
      <Text style={styles.textoResultado}> {resultado} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoTitulo1: {
    fontSize: 22,
    fontFamily: 'Verdana',
  },
  caixaTexto1: {
    width: 200,
    height: 40,
    borderColor: 'green',
    borderWidth: 1,
    marginBottom: 10,
  },
  textoResultado: {
    fontSize: 24,
    marginTop: 15,
    fontFamily: 'Arial',
    color: 'orange',
  }
});
