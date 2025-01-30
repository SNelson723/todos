import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { getData } from "../../src/api/getData";
import StoreContainer from "./StoreContainer";
import { setStores } from "../../src/store/reducers/storeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useToken } from "../../src/token";

const StoresScreen = () => {
  const token = useToken();
  const dispatch = useDispatch();
  const stores = useSelector((state) => state.stores.stores);

  React.useEffect(() => {
    const fetchStores = async () => {
      try {
        const stores = await getData(
          "https://devapi.dcr-support.com/mobile/DCRStores",
          token
        );
        dispatch(setStores(stores));
      } catch (error) {
        console.log(error);
      }
    };

    fetchStores();
  }, [token]);

  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <Text>Search??</Text>
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
  },
});

export default StoresScreen;
