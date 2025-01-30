import React from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { getData } from "../../src/api/getData";
import { useToken } from "../../src/token";

const ContractsScreen = ({ route }) => {
  const token = useToken();

  React.useEffect(() => {
    const fetchContracts = async () => {
      const contracts = await getData(
        "https://devapi.dcr-support.com/mobile/DCRStores/Contracts",
        token
      );
      console.log(contracts.length)
    };

    fetchContracts();
  }, [token]);

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