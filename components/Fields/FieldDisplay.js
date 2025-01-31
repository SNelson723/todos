import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const FieldDisplay = ({ field, setViewingInput, setCurrentField }) => {
  const handleGoBack = () => {
    setCurrentField(null);
    setViewingInput(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.goBackButton}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <View></View>
      <Text>Field Display</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#66cc91",
    paddingBottom: 150,
  },
  goBackButton: {},
});

export default FieldDisplay;
