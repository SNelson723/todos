import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useToken } from "../../src/token";
import {
  setFields,
} from "../../src/store/reducers/fieldSlice";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../src/api/getData";
import FieldDisplay from "./FieldDisplay";

const FieldsScreen = () => {
  const [text, setText] = React.useState("");
  const [viewingInput, setViewingInput] = React.useState(true);
  const [currentField, setCurrentField] = React.useState(null);
  const token = useToken();
  const fields = useSelector((state) => state.fields.fields);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchFields = async () => {
      try {
        const fields = await getData(
          "https://devapi.dcr-support.com/mobile/Fields",
          token
        );

        dispatch(setFields(fields));
      } catch (err) {
        console.log(err);
      }
    };

    fetchFields();
  }, []);

  const handleSearch = async () => {
    const result = fields.filter(field => field.fieldName === text.toUpperCase());

    if (!text || !result.length) {
      Alert.alert("Error", "Please enter a valid field name");
    } else {
      setCurrentField(result[0]);
      setText('');
      setViewingInput(false); // means we're looking at a searched field
    }
  };

  return (
    <View style={styles.container}>
      {viewingInput ? (
        <View>
          <Text style={styles.headerText}>Search for Field by Name</Text>
          <View style={styles.inputView}>
            <TextInput style={styles.input} value={text} onChangeText={setText} />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

      ) : <FieldDisplay field={currentField} setViewingInput={setViewingInput} setCurrentField={setCurrentField} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#66cc91",
    paddingBottom: 150
  },
  input: {
    width: 150,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    borderWidth: 2,
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
    backgroundColor: "#f8f8f8",
  },
  headerText: {
    fontSize: 22,
  },
  searchButton: {
    borderWidth: 2,
    width: 125,
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#afeeee",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  inputView: {
    alignItems: "center",
  },
});

export default FieldsScreen;
