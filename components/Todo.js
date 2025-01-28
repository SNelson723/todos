import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { removeTodo } from "../src/store/reducers"; // Adjust the import path as needed

const Todo = ({ todo, id }) => {
  const [isChecked, setIsChecked] = React.useState(false)
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(id));
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.checkbox} onPress={() => setIsChecked(!isChecked)}>
        <Text>{isChecked ? 'X' : ''}</Text>
      </TouchableOpacity>
      <Text>{todo}</Text>
      <TouchableOpacity onPress={handleRemove} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    borderWidth: 1,
    width: 20,
    textAlign: 'center',
    alignItems: 'center'
  },
  item: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
    width: '85%'
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
