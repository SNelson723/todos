import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const StoreDetailScreen = ({ route }) => {
  const { store } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.buttonText}>← Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{store.storeName}</Text>
      {/* Rest of your component */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backButton: {
    paddingHorizontal: 20,
    marginBottom: 10,
    paddingVertical: 10
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 25

  }
});

export default StoreDetailScreen;
