import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.app.todos);

  return (
    <View style={styles.listContainer}>
      {todos.map((todo, i) => (
        <Todo key={`todo-${i}`} todo={todo} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    top: 40,
  },
});

export default TodoList;
