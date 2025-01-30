import React from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { getData } from "../../src/api/getData";
import { useToken } from "../../src/token";
import { setContracts } from '../../src/store/reducers/contractSlice';
import { useDispatch, useSelector } from 'react-redux';
import ContractContainer from './ContractContainer';

const ContractsScreen = () => {
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
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  return (
    <View style={styles.container}>
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
});

export default ContractsScreen;