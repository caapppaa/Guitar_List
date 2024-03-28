import {
  TextInput,
  View,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GuitarInput(props) {
  const [enteredGuitarText, setEnteredGuitarText] = useState("");

  function specGuitarHandler(enteredText) {
    setEnteredGuitarText(enteredText);
  }
  // by manually calling this function, This allows us to send props to App.js
  function addGoalHandler() {
    props.onAddGuitar(enteredGuitarText);
    setEnteredGuitarText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/electric-guitar.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Add Your guitars!"
          onChangeText={specGuitarHandler}
          value={enteredGuitarText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#ffffff" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Guitar"
              onPress={addGoalHandler}
              color="#b7e4c9"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GuitarInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    paddingTop: "30%",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#032a1a",
  },
  textInput: {
    borderWidth: 5,
    borderColor: "#ffffff95",
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 6,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 13,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    tintColor: "#fff9f9",
    width: 100,
    height: 100,
    margin: 20,
  },
});
