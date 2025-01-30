import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const ModalComponent = ({ isVisible, setIsVisible, setFilterText }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isVisible}
          onRequestClose={() => setIsVisible(!isVisible)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text
                onPress={(e) => setFilterText("scannerType")}
                style={styles.modalText}
              >
                Scanner Type
              </Text>
              <Text
                onPress={() => setFilterText("upcFormat")}
                style={styles.modalText}
              >
                UPC Format
              </Text>
              <Text
                onPress={() => setFilterText("decode")}
                style={styles.modalText}
              >
                Decode
              </Text>
              <Pressable
                style={styles.button}
                onPress={() => setIsVisible(!isVisible)}
              >
                <Text style={styles.buttonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#f8f8ff",
    borderRadius: 15,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 7,
    elevation: 2,
    backgroundColor: "#66cc91",
    width: 70,
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 25,
  },
});

export default ModalComponent;
