import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const GoBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}
    >
      <Icon name='arrow-back-ios-new' size={20} />
      <Text style={styles.buttonText}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    paddingHorizontal: 15,
    margin: 20,
    paddingVertical: 8,
    alignSelf: "left",
    borderWidth: 2,
    backgroundColor: "#f8f8f8",
    width: 110,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 2
  },
});

export default GoBack;
