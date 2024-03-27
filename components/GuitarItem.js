import { StyleSheet, View, Text, Pressable } from "react-native";
// Resopnsible for rending each Guitar item in the list
function GuitarItem(props) {
    
  return (
    <Pressable style={({pressed}) => {}}
    onPress={props.onDeleteGuitar.bind(this, props.id)}>
      <View style={styles.guitarItem}>
        <Text style={styles.guitarText}> {props.text} </Text>
      </View>
    </Pressable>
  );
}

export default GuitarItem;

const styles = StyleSheet.create({
  guitarItem: {
    margin: 5,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#1e385b",
  },
  guitarText: {
    color: "white"
  },
});
