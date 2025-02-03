import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { detailsScreenStyles } from "../../src/styles";
import Icon from "react-native-vector-icons/MaterialIcons";

const FieldDisplay = ({ field, setViewingInput, setCurrentField }) => {
  const handleGoBack = () => {
    setCurrentField(null);
    setViewingInput(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Icon name="arrow-back-ios-new" size={20} />
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <View
        style={[
          detailsScreenStyles.detailsContainer,
          { width: 275, marginTop: "25" },
        ]}
      >
        <View style={detailsScreenStyles.detailView}>
          <Text style={detailsScreenStyles.detailLabel}>Name</Text>
          <Text style={detailsScreenStyles.detail}>{field.fieldName}</Text>
        </View>
        <View style={detailsScreenStyles.detailView}>
          <Text style={detailsScreenStyles.detailLabel}>Number</Text>
          <Text style={detailsScreenStyles.detail}>{field.fieldNumber}</Text>
        </View>
        <View style={detailsScreenStyles.detailView}>
          <Text style={detailsScreenStyles.detailLabel}>Description</Text>
          <Text style={detailsScreenStyles.detail}>
            {field.fieldDescription}
          </Text>
        </View>
        <View style={detailsScreenStyles.detailView}>
          <Text style={detailsScreenStyles.detailLabel}>Range</Text>
          <Text style={detailsScreenStyles.detail}>{field.fieldRange}</Text>
        </View>
      </View>
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
  backButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 2,
    backgroundColor: "#f8f8f8",
    width: 110,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 2,
  },
});

export default FieldDisplay;
