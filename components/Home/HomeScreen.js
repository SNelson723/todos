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
        onPress={() => navigation.navigate("Barcodes")}
      >
        <Text style={styles.buttonText}>Bar Code Decodes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stores")}
      >
        <Text style={styles.buttonText}>DCR Stores</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Contracts")}
      >
        <Text style={styles.buttonText}>Contracts</Text>
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
    flexDirection: "row",
    gap: 50,
    flexWrap: "wrap",
    backgroundColor: "#66cc91",
  },
  button: {
    width: 130,
    height: 65,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 30,
    padding: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default HomeScreen;
