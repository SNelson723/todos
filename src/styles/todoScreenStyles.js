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
    fontWeight: '500'
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
    marginBottom: 8,
    borderWidth: 2,
    width: 280,
    fontSize: 17,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
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
