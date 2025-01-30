import { StyleSheet } from "react-native";

export const detailsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#66cc91",
    alignItems: "center",
  },
  detailsContainer: {
    borderWidth: 3,
    width: "70%",
    justifyContent: "center",
    paddingBottom: 20,
    borderRadius: 15,
    backgroundColor: "#f8f8f8",
  },
  detailView: {
    marginTop: 20,
    alignItems: "center",
  },
  detailLabel: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5,
    textDecorationLine: "underline",
  },
  detail: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
  },
});