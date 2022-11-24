import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Switch, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App cálculo de IMC</Text>
      <Image source={require('')} />
      <TextInput />
      <Button onPress={()=>{}} title="Calcular" />
      <Switch />
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
});
