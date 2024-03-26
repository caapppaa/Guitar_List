import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";

export default function App() {
  const [enteredGuitarText, setEnteredGuitarText] = useState("");
  const [guitar, setGuitars] = useState([]);

  function specGuitarHandler(enteredText) {
    setEnteredGuitarText(enteredText);
  }

  function addGuitarHandler() {
    setGuitars((currentGuitars) => [...currentGuitars, enteredGuitarText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add Your guitars!"
          onChangeText={specGuitarHandler}
        />
        <Button title="Add Guitar" onPress={addGuitarHandler} />
      </View>
      <Text style={styles.titleText}>My Collection</Text>

      <View style={styles.guitarsContainer}>
      <ScrollView>
        {guitar.map((guitar) => (
          <View key={guitar} style={styles.guitarItem}>
            <Text style={styles.guitarText}> {guitar} </Text>
          </View>
        ))}
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    BorderBottomColour: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  guitarsContainer: {
    flex: 5,
  },
  guitarItem: {
    margin: 5,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#161b22"
  },
  guitarText: {
    color: "white",
  },
  titleText: {
    fontSize: 15,
    color: "grey",
  }
});
