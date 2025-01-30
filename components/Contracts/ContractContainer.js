import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ContractContainer = ({ contract }) => {
  const handlePress = () => {
    console.log(contract);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.item}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
        {contract.contractId} - {contract.contractType}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
    width: 400,
    textAlign: "center",
  },
  text: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "500",
  },
});

export default ContractContainer;