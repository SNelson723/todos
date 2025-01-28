import React from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./src/store/store";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";

import TodoList from "./components/TodoList";
import { addTodo } from "./src/store/reducers";

const MainApp = () => {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Tommy's ToDo List</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value={text} onChangeText={setText} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(addTodo(text));
              setText("");
            }}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TodoList />
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 125 : 0,
  },
  input: {
    height: 35,
    marginRight: 10,
    borderWidth: 1,
    padding: 10,
    width: 200,
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
