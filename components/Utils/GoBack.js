import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GoBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}
    >
      <Text style={styles.buttonText}>← Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    paddingHorizontal: 20,
    margin: 20,
    paddingVertical: 10,
    alignSelf: "left",
    borderWidth: 2,
    backgroundColor: "#f8f8f8",
    width: 140,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "900",
    fontSize: 25,
  },
});

export default GoBack;
