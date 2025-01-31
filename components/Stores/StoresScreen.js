import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { getData } from "../../src/api/getData";
import { getStoresByCategory } from "../../src/api/getStore";
import StoreContainer from "./StoreContainer";
import { setStores, setDefaultStores } from "../../src/store/reducers/storeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useToken } from "../../src/token";
import { TextInput } from "react-native-gesture-handler";

const StoresScreen = () => {
  const [text, setText] = React.useState("");
  const token = useToken();
  const dispatch = useDispatch();
  const stores = useSelector((state) => state.stores.stores);
  const defaultStores = useSelector((state) => state.stores.defaultStores);

  React.useEffect(() => {
    const fetchStores = async () => {
      try {
        const stores = await getData(
          "https://devapi.dcr-support.com/mobile/DCRStores",
          token
        );
        dispatch(setStores(stores));
        dispatch(setDefaultStores(stores));
      } catch (error) {
        console.log(error);
      }
    };

    fetchStores();
  }, [token]);

  const handleSearch = async () => {
    const newStores = await getStoresByCategory(text, token);
    dispatch(setStores(newStores));
    setText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={setText}
          placeholder="Search by Category"
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={[styles.buttonText, { color: 'black'}]}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => dispatch(setStores(defaultStores))}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {stores && stores.length > 0 ? (
          stores.map((s, i) => <StoreContainer key={`store-${i}`} store={s} />)
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
    justifyContent: "flex-start",
    paddingTop: 25,
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
    color: 'white'
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

export default StoresScreen;
