import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Todo")}
      >
        <Text style={styles.buttonText}>Todo List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Todo")}
      >
        <Text style={styles.buttonText}>Bar Codes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 150,
    alignItems: "flex-start",
    flexDirection: 'row',
    gap: 50,
    flexWrap: 'wrap'
  },
  button: {
    width: 125,
    height: 45,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 30
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default HomeScreen;
