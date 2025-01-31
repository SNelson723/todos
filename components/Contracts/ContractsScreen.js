import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { getData } from "../../src/api/getData";
import { useToken } from "../../src/token";
import { setContracts } from "../../src/store/reducers/contractSlice";
import { useDispatch, useSelector } from "react-redux";
import ContractContainer from "./ContractContainer";
import { getContractsByContractId } from "../../src/api/getContracts";

const ContractsScreen = () => {
  const [text, setText] = React.useState("");
  const [isResetting, setIsResetting] = React.useState(0);
  const token = useToken();
  const dispatch = useDispatch();
  const contracts = useSelector((state) => state.contracts.contracts);

  React.useEffect(() => {
    try {
      const fetchContracts = async () => {
        const contracts = await getData(
          "https://devapi.dcr-support.com/mobile/DCRStores/Contracts",
          token
        );
        dispatch(setContracts(contracts));
      };

      fetchContracts();
      setText("");
    } catch (error) {
      console.log(error);
    }
  }, [token, isResetting]);

  const handleSearch = async () => {
    if (!text) {
      Alert.alert("Invalid", "Please enter a valid ID");
    } else {
      try {
        const newContracts = await getContractsByContractId(text, token);
        dispatch(setContracts(newContracts));
        setText("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={setText}
          placeholder="Search by ID"
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={[styles.buttonText, { color: "black" }]}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => setIsResetting((prev) => prev + 1)}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {contracts && contracts.length > 0 ? (
          contracts.map((c, i) => (
            <ContractContainer key={`contract-${i}`} contract={c} />
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
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
  scrollView: {
    maxHeight: "85%",
  },
  searchView: {
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "#f8f8f8",
    width: 170,
    fontSize: 18,
    textAlign: "center",
    borderRadius: 15,
  },
  searchButton: {
    width: 100,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 15,
    height: 47,
    backgroundColor: "#afeeee",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
  resetButton: {
    width: 100,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 15,
    height: 47,
    backgroundColor: "tomato",
  },
});

export default ContractsScreen;
