import { Text, View, StyleSheet } from "react-native";

const StoreContainer = ({ store }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{store.storeName}</Text>
    </View>
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
    fontSize: 16,
    textAlign: 'center'
  },
});

export default StoreContainer;
