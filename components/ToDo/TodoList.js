import React from "react";
import { View, StyleSheet } from "react-native";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <View style={styles.listContainer}>
      {todos.map((todo, i) => (
        <Todo
          key={`todo-${i}`}
          id={todo.id}
          todo={todo.todo}
          isChecked={todo.isChecked}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    top: 30,
    alignItems: "center",
  },
});

export default TodoList;
