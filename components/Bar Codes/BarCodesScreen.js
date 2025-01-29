import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getBarCodes } from "../../src/api/barCodesApi";
import BarCodeTable from "./BarCodeTable";

const BarCodesScreen = ({ route }) => {
  const [barCodes, setBarCodes] = React.useState([]);
  const { token } = route.params;

  React.useEffect(() => {
    const fetchBarCodes = async () => {
      try {
        const codes = await getBarCodes("", token);
        setBarCodes(codes);
      } catch (error) {
        console.log("Error fetching bar codes:", error);
      }
    };

    fetchBarCodes();

  }, [token]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>List of Bar Codes</Text>
      <View>
        {barCodes.length ? <BarCodeTable barCodes={barCodes} /> : <Text>Loading</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 50,
    alignItems: "center",
  },
  headerText: {
    fontSize: 26
  },
});

export default BarCodesScreen;
