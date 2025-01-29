import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
} from "react-native";
import BarCode from "./BarCode";

const BarCodeTable = ({ barCodes }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View>
        <Text style={styles.filterView}>Filter table logic</Text>
      </View>
      <ScrollView style={[styles.container, { width: width - 40 }]}>
        <View style={styles.headerView}>
          <Text style={[styles.text, { width: "25%" }]}>Type</Text>
          <Text style={[styles.text, styles.middle, { width: "30%" }]}>
            UPC Format
          </Text>
          <Text style={[styles.text, { width: "45%" }]}>Decode</Text>
        </View>
        {barCodes.map((code, i) => (
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
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: "90%",
    flex: 1,
    alignContent: "center",
    borderWidth: 3
  },
  headerView: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 3,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: "left",
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
});

export default BarCodeTable;
