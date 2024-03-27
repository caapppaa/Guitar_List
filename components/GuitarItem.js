import { StyleSheet, View, Text } from "react-native";
// Resopnsible for rending each Guitar item in the list
function GuitarItem(props) {
  return (
    <View style={styles.guitarItem}>
      <Text style={styles.guitarText}> {props.text} </Text>
    </View>
  );
}

export default GuitarItem;

const styles = StyleSheet.create({
  guitarItem: {
    margin: 5,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#161b22",
  },
  guitarText: {
    color: "white",
  },
});
