import { Text, View } from "react-native";
import GoBack from "../Utils/GoBack";
import { detailsScreenStyles } from "../../src/styles";

const ContractDetailsScreen = ({ route }) => {
  const { contract } = route.params;
  const date = contract.contractEndDate.split("T")[0];

  return (
    <View style={detailsScreenStyles.container}>
      <GoBack />
      <View style={[detailsScreenStyles.detailsContainer, { top: '120'}]}>
        <View style={detailsScreenStyles.detailView}>
          <Text style={detailsScreenStyles.detailLabel}>Contract ID</Text>
          <Text style={detailsScreenStyles.detail}>{contract.contractId}</Text>
        </View>
        <View style={detailsScreenStyles.detailView}>
          <Text style={detailsScreenStyles.detailLabel}>Contract Type</Text>
          <Text style={detailsScreenStyles.detail}>
            {contract.contractType}
          </Text>
        </View>
        <View style={detailsScreenStyles.detailView}>
          <Text style={detailsScreenStyles.detailLabel}>
            Contract Description
          </Text>
          <Text style={detailsScreenStyles.detail}>
            {contract.contractDescription}
          </Text>
        </View>
        <View style={detailsScreenStyles.detailView}>
          <Text style={detailsScreenStyles.detailLabel}>Contract End Date</Text>
          <Text style={detailsScreenStyles.detail}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

export default ContractDetailsScreen;
