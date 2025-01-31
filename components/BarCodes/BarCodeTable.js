import React from "react";
import BarCode from "./BarCode";
import ModalComponent from "../Modal/Modal";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
} from "react-native";

const BarCodeTable = ({ decodes }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View style={[styles.container, { width: width - 40 }]}>
        <View style={styles.headerView}>
          <Text style={[styles.text, { width: "25%" }]}>Type</Text>
          <Text style={[styles.text, styles.middle, { width: "35%" }]}>
            UPC Format
          </Text>
          <Text style={[styles.text, { width: "40%" }]}>Decode</Text>
        </View>
        <ScrollView>
          {decodes.map((code, i) => (
            <BarCode
              key={`barcode-decode-${i}`}
              index={i}
              type={code.scannerType}
              format={code.upcFormat}
              decode={code.decode}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: "88%",
    flex: 1,
    alignContent: "center",
    borderWidth: 3,
    marginTop: 30
  },
  headerView: {
    flexDirection: "row",
    borderBottomWidth: 3,
    backgroundColor: "#f8f8ff",
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: "center",
  },
  middle: {
    borderRightWidth: 3,
    borderLeftWidth: 3,
  },
  filterView: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
  filterContainer: {
    backgroundColor: "#f8f8ff",
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 20,
  },
  modalStyle: {},
});

export default BarCodeTable;
