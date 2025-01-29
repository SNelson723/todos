import { Text, View, StyleSheet } from "react-native";

const BarCode = ({ index, type, format, decode }) => {
  return (
    <View
      style={[index % 2 === 0 ? styles.even : styles.odd, styles.viewContainer]}
    >
      <View style={[styles.textContainer, { width: "25%" }]}>
        <Text style={styles.text}>{type}</Text>
      </View>
      <View
        style={[styles.textContainer, styles.middleCol]}
      >
        <Text style={styles.text}>{format}</Text>
      </View>
      <View style={[styles.textContainer, { width: "40%" }]}>
        <Text style={[styles.text]}>{decode}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  even: {
    backgroundColor: "#f5fffa",
  },
  odd: {
    backgroundColor: "#87cefa",
  },
  viewContainer: {
    flex: 1,
    flexDirection: "row",
  },
  textContainer: {
    textAlign: "center",
    paddingLeft: 5,
  },
  text: {
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5,
  },
  middleCol: {
    width: "35%",
    borderLeftWidth: 3,
    borderRightWidth: 3
  },
});

export default BarCode;
