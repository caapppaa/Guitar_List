import { StyleSheet, View, Text, Pressable } from "react-native";
// Resopnsible for rending each Guitar item in the list
function GuitarItem(props) {
  return (
    <View style={styles.guitarItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onDeleteGuitar.bind(this, props.id)}
      >
        <Text style={styles.guitarText}> {props.text} </Text>
      </Pressable>
    </View>
  );
}

export default GuitarItem;

const styles = StyleSheet.create({
  guitarItem: {
    margin: 5,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#ffffff",
  },
  guitarText: {
    color: "black",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
