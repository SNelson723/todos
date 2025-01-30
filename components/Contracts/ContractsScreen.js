import { Text, View, StyleSheet } from "react-native";


const ContractsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Contracts go here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#66cc91",
  },
});

export default ContractsScreen;