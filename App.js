import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./src/store/store";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  Alert,
} from "react-native";

import TodoList from "./components/TodoList";
import { addTodo, clearTodos } from "./src/store/reducers";

const MainApp = () => {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.app.todos);
  // console.log(todos)

  const handleClear = () => {
    const alert = todos.every((todo) => !todo.isChecked);
    console.log(alert);
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
              dispatch(
                addTodo({ id: todos.length, todo: text, isChecked: false })
              );
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

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

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
    backgroundColor: "#70EE63",
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
