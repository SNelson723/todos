import React from "react";
import { Text, TextInput, View, TouchableOpacity, Alert } from "react-native";

// component and styles
import TodoList from "./TodoList";
import { todoScreenStyles } from "../../src/styles";

// store
import { addTodo, clearTodos } from "../../src/store/reducers/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const TodoScreen = () => {
  const [text, setText] = React.useState("");
  const [id, setId] = React.useState(1);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

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

  const handleAdd = () => {
    if (!text) {
      Alert.alert("Missing", "Please enter a valid task");
    } else {
      try {
        dispatch(addTodo({ id: id, todo: text, isChecked: false }));
        setId((prev) => prev + 1);
        setText("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <View style={todoScreenStyles.container}>
      <View style={todoScreenStyles.headerContainer}>
        <Text style={todoScreenStyles.title}>Tommy's ToDo List</Text>
        <View style={todoScreenStyles.inputContainer}>
          <TextInput
            style={todoScreenStyles.input}
            value={text}
            onChangeText={setText}
          />
        </View>
        <View style={todoScreenStyles.buttonView}>
          <TouchableOpacity style={todoScreenStyles.button} onPress={handleAdd}>
            <Text style={todoScreenStyles.buttonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={todoScreenStyles.clearButton}
            onPress={handleClear}
          >
            <Text style={todoScreenStyles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TodoList todos={todos} />
      </View>
    </View>
  );
};

export default TodoScreen;
