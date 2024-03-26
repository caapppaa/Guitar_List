import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello World!</Text>
      <Text>Another Piece of Text</Text>
      <Button title='Tap Me!' />
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
  hello: {
    fontSize: 23, 
    margin: 10, 
    borderWidth: 2, 
    borderColor: 'blue', 
    padding: 10
  }
});
