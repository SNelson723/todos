import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getBarCodes } from "../../src/api/barCodesApi";
import BarCodeTable from "./BarCodeTable";
import { setDecodes } from '../../src/store/reducers/decodeSlice';
import { useDispatch, useSelector } from "react-redux";

const BarCodesScreen = ({ route }) => {
  const { token } = route.params;
  const dispatch = useDispatch();
  const decodes = useSelector((state) => state.decodes.decodes);

  React.useEffect(() => {
    const fetchBarCodes = async () => {
      try {
        const codes = await getBarCodes("", token);
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
        {decodes.length ? <BarCodeTable decodes={decodes} /> : <Text>Loading</Text>}
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
