import React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

import TodoList from "./TodoList";
import { addTodo, clearTodos } from "../../src/store/reducers/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const TodoScreen = () => {
  const [text, setText] = React.useState("");
  const [id, setId] = React.useState(1);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.app.todos);

  const handleClear = () => {
    const alert = todos.every((todo) => !todo.isChecked);
    if (alert) {
      Alert.alert(
        "Check Yourself Tommy",
        "None of the items on the list have been checked off"
      );
    } else {
      dispatch(clearTodos(true));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Tommy's ToDo List</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value={text} onChangeText={setText} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(addTodo({ id: id, todo: text, isChecked: false }));
              setId((prev) => prev + 1);
              setText("");
            }}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TodoList todos={todos} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 85,
    height: 35,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  clearButton: {
    width: 85,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "red",
    fontSize: 16,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#66cc91",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 125 : 0,
  },
  input: {
    height: 35,
    marginRight: 10,
    borderWidth: 1,
    padding: 5,
    width: 200,
    fontSize: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center",
  },
});

export default TodoScreen;
