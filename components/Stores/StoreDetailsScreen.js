import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GoBack from "../Utils/GoBack";
import { detailsScreenStyles } from "../../src/styles";

const StoreDetailScreen = ({ route }) => {
  const { store } = route.params;

  return (
    <View style={detailsScreenStyles.container}>
      <GoBack />
      <View style={detailsScreenStyles.detailsContainer}>
        <View style={detailsScreenStyles.detailView}>
          <Text style={detailsScreenStyles.detailLabel}>Store ID</Text>
          <Text style={detailsScreenStyles.detail}>{store.id}</Text>
        </View>
        <View style={detailsScreenStyles.detailView}>
          <Text style={detailsScreenStyles.detailLabel}>Store Name</Text>
          <Text style={detailsScreenStyles.detail}>{store.storeName}</Text>
        </View>
        <View style={detailsScreenStyles.detailView}>
          <Text style={detailsScreenStyles.detailLabel}>Category</Text>
          <Text style={detailsScreenStyles.detail}>{store.storeCategory}</Text>
        </View>
        <View style={detailsScreenStyles.detailView}>
          <Text style={detailsScreenStyles.detailLabel}>Location</Text>
          <View>
            <Text style={detailsScreenStyles.detail}>{store.storeAddress}</Text>
            <Text style={detailsScreenStyles.detail}>
              {store.storeCity}, {store.storeState} {store.storeZip}
            </Text>
          </View>
        </View>
        <View style={detailsScreenStyles.detailView}>
          <Text style={detailsScreenStyles.detailLabel}>Group</Text>
          <Text style={detailsScreenStyles.detail}>{store.storeGroup}</Text>
        </View>
        <View style={detailsScreenStyles.detailView}>
          <Text style={detailsScreenStyles.detailLabel}>TPA</Text>
          <Text style={detailsScreenStyles.detail}>{store.storeTigerPawAcct}</Text>
        </View>
        <View style={detailsScreenStyles.detailView}>
          <Text style={detailsScreenStyles.detailLabel}>TPID</Text>
          <Text style={detailsScreenStyles.detail}>{store.storeTigerPawID}</Text>
        </View>
        <View style={detailsScreenStyles.detailView}>
          <Text style={detailsScreenStyles.detailLabel}>DMSID</Text>
          <Text style={detailsScreenStyles.detail}>{store.dmsId || 'null'}</Text>
        </View>
      </View>
    </View>
  );
};

export default StoreDetailScreen;
