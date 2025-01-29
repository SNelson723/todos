import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, setChecked } from "../../src/store/reducers"; // Adjust the import path as needed

const Todo = ({ todo, id, isChecked }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    const alert = !isChecked;

    if (alert) {
      Alert.alert(
        "Check Yourself Tommy",
        `The task: "${todo}" has not been completed`
      );
    } else {
      dispatch(removeTodo(id));
    }
  };

  const handleCheck = () => {
    dispatch(setChecked({ id: id, isChecked: !isChecked }));
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.checkbox} onPress={handleCheck}>
        <Text>{isChecked ? "✅" : ""}</Text>
      </TouchableOpacity>
      <Text
        style={{
          textDecorationLine: isChecked ? "line-through" : "none",
          fontSize: 20,
        }}
      >
        {todo}
      </Text>
      <TouchableOpacity onPress={handleRemove} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    borderWidth: 1,
    width: 25,
    height: 25,
    textAlign: "center",
    alignItems: "center",
  },
  item: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
    width: "85%",
  },
  removeButton: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default Todo;
