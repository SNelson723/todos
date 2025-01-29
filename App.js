import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./src/store/store";

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
