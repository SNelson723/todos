import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { removeTodo } from "../src/store/reducers"; // Adjust the import path as needed

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(todo));
  };

  return (
    <View style={styles.item}>
      <Text>{todo}</Text>
      <TouchableOpacity onPress={handleRemove} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
  },
  removeButton: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Todo;
