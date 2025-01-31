import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getData } from "../../src/api/getData";
import BarCodeTable from "./BarCodeTable";
import { setDecodes } from '../../src/store/reducers/decodeSlice';
import { useDispatch, useSelector } from "react-redux";
import { useToken } from "../../src/token";

const BarCodesScreen = () => {
  const token = useToken();
  const dispatch = useDispatch();
  const decodes = useSelector((state) => state.decodes.decodes);

  React.useEffect(() => {
    const fetchBarCodes = async () => {
      try {
        const codes = await getData(
          "https://devapi.dcr-support.com/mobile/BarcodeDecodes",
          token
        );
        dispatch(setDecodes(codes))
        
      } catch (error) {
        console.log("Error fetching bar codes:", error);
      }
    };

    fetchBarCodes();
  }, [token]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bar Code Decodes</Text>
      <View>
        {decodes && decodes.length ? <BarCodeTable decodes={decodes} /> : <Text>Loading</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 25,
    alignItems: "center",
    backgroundColor: "#66cc91",
  },
  headerText: {
    fontSize: 27,
    fontWeight: '500'
  },
});

export default BarCodesScreen;
