import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GuitarItem from "./components/GuitarItem";
import GuitarInput from "./components/GuitarInput";

export default function App() {
  const [guitar, setGuitars] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGuitarHandler() {
    setModalIsVisible(true);
  }
  function endAddGuitarHandler() {
    setModalIsVisible(false);
  }

  function addGuitarHandler(enteredGuitarText) {
    setGuitars((currentGuitars) => [
      ...currentGuitars,
      { text: enteredGuitarText, id: Math.random().toString() },
    ]);
    endAddGuitarHandler();
  }

  function deleteGuitarHandler(id) {
    setGuitars((currentGuitars) => {
      // Filters based on statement,
      // in this case if the guitar is equal to the guitar you've clicked on.
      // Determined by Guitar id
      return currentGuitars.filter((guitar) => guitar.id !== id);
    });
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button
        style={styles.button}
        title="Add new Guitar"
        color={"#b7e4c9"}
        onPress={startAddGuitarHandler}
      />
      <GuitarInput
        visible={modalIsVisible}
        onAddGuitar={addGuitarHandler}
        onCancel={endAddGuitarHandler}
      />
      <Text style={styles.titleText}>My Collection</Text>

      <View style={styles.guitarsContainer}>
        <FlatList
          data={guitar}
          renderItem={(itemData) => {
            // Passing Props to the GuitarItem.js File which is responsible for rending the inputted Guitars
            return (
              <GuitarItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteGuitar={deleteGuitarHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: '30%',
    paddingHorizontal: 16,
    backgroundColor: "#032a1a",
  },
  guitarsContainer: {
    flex: 5,
  },
  titleText: {
    fontSize: 40,
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
