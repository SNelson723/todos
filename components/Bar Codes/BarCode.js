import { Text, View, StyleSheet } from "react-native";

const BarCode = ({ index, type, format, decode }) => {
  return (
    <View
      style={[index % 2 === 0 ? styles.even : styles.odd, styles.viewContainer]}
    >
      <View style={[styles.textContainer, { width: "25%" }]}>
        <Text style={styles.text}>{type}</Text>
      </View>
      <View style={[styles.textContainer, { width: "30%" }]}>
        <Text style={styles.text}>{format}</Text>
      </View>
      <View style={[styles.textContainer, { width: "45%" }]}>
        <Text style={[styles.text, {paddingLeft: '15'}]}>{decode}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  even: {
    backgroundColor: "#F0F8FF",
  },
  odd: {
    backgroundColor: "#dcdcdc",
  },
  viewContainer: {
    padding: 5,
    flex: 1,
    flexDirection: 'row',
  },
  textContainer: {
    textAlign: 'center',
  },
  text: {
    fontSize: 16
  }
});

export default BarCode;
