import { TextInput, View, Button, StyleSheet } from "react-native";
import { useState } from "react";

function GuitarInput(props) {
  const [enteredGuitarText, setEnteredGuitarText] = useState("");

  function specGuitarHandler(enteredText) {
    setEnteredGuitarText(enteredText);
  }
  // by manually calling this function, This allows us to send props to App.js
  function addGoalHandler() {
    props.onAddGuitar(enteredGuitarText);
    setEnteredGuitarText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Add Your guitars!"
        onChangeText={specGuitarHandler}
        value={enteredGuitarText}
      />
      <Button title="Add Guitar" onPress={addGoalHandler} />
    </View>
  );
}

export default GuitarInput;

const styles = StyleSheet.create({
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
});
