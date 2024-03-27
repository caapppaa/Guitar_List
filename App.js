import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";

import GuitarItem from "./components/GuitarItem";
import GuitarInput from "./components/GuitarInput";

export default function App() {
  const [guitar, setGuitars] = useState([]);

  function addGuitarHandler(enteredGuitarText) {
    setGuitars((currentGuitars) => [
      ...currentGuitars,
      { text: enteredGuitarText, key: Math.random().toString() },
    ]);
  }

  return (
    // Passing Props to the Guitar Input box in GuitarInput.js
    <View style={styles.appContainer}>
      <GuitarInput onAddGuitar={addGuitarHandler} />
      <Text style={styles.titleText}>My Collection</Text>

      <View style={styles.guitarsContainer}>
        <FlatList
          data={guitar}
          renderItem={(itemData) => {
            // Passing Props to the GuitarItem.js File which is responsible for rending the inputted Guitars
            return <GuitarItem text={itemData.item.text} />;
          }}
          alwaysBounceVertical={false}
        />
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
  guitarsContainer: {
    flex: 5,
  },
  titleText: {
    fontSize: 15,
    color: "grey",
  },
});
