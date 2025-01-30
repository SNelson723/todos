import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const StoreContainer = ({ store }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("StoreDetails", { store });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.item}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
        {store.storeName}
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
    fontSize: 16,
    textAlign: "center",
  },
});

export default StoreContainer;
