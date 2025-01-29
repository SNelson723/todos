import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";

import TodoList from './TodoList'
import { addTodo, clearTodos } from "../../src/store/reducers";

export default TodoScreen = () => {
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
