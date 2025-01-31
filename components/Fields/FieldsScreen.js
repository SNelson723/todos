import { Text, View, StyleSheet } from "react-native";


const FieldsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Fields Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#66cc91",
  },
});

export default FieldsScreen;