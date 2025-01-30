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

      <View style={styles.detailsContainer}>
        <View style={styles.detailView}>
          <Text style={styles.detailLabel}>Store ID</Text>
          <Text style={styles.detail}>{store.id}</Text>
        </View>
        <View style={styles.detailView}>
          <Text style={styles.detailLabel}>Store Name</Text>
          <Text style={styles.detail}>{store.storeName}</Text>
        </View>
        <View style={styles.detailView}>
          <Text style={styles.detailLabel}>Category</Text>
          <Text style={styles.detail}>{store.storeCategory}</Text>
        </View>
        <View style={styles.detailView}>
          <Text style={styles.detailLabel}>Location</Text>
          <View>
            <Text style={styles.detail}>{store.storeAddress}</Text>
            <Text style={styles.detail}>
              {store.storeCity}, {store.storeState} {store.storeZip}
            </Text>
          </View>
        </View>
        <View style={styles.detailView}>
          <Text style={styles.detailLabel}>Group</Text>
          <Text style={styles.detail}>{store.storeGroup}</Text>
        </View>
        <View style={styles.detailView}>
          <Text style={styles.detailLabel}>TPA</Text>
          <Text style={styles.detail}>{store.storeTigerPawAcct}</Text>
        </View>
        <View style={styles.detailView}>
          <Text style={styles.detailLabel}>TPID</Text>
          <Text style={styles.detail}>{store.storeTigerPawID}</Text>
        </View>
        <View style={styles.detailView}>
          <Text style={styles.detailLabel}>DMSID</Text>
          <Text style={styles.detail}>{store.dmsId || 'null'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default StoreDetailScreen;
