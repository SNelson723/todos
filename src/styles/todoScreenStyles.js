import { StyleSheet, Platform, StatusBar } from "react-native";

export const todoScreenStyles = StyleSheet.create({
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
  },
  container: {
    flex: 1,
    backgroundColor: "#66cc91",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 40 : 0,
  },
  input: {
    height: 35,
    marginBottom: 10,
    borderWidth: 1,
    paddingBottom: 5,
    width: 210,
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
  buttonView: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
  },
});
