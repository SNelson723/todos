import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "./components/Home/HomeScreen";
import TodoScreen from "./components/ToDo/TodoScreen";
import BarCodesScreen from "./components/BarCodes/BarCodesScreen";
import StoresScreen from "./components/Stores/StoresScreen";
import StoreDetailsScreen from "./components/Stores/StoreDetailsScreen";
import ContractsScreen from "./components/Contracts/ContractsScreen";
import ContractDetailsScreen from "./components/Contracts/ContractDetailsScreen";

// Bearer Token Prop
import { TokenProvider } from "./src/token";

// Tab bar and navigation structure
import TabBar from "./components/NavBar/NavBar";
import FieldsScreen from "./components/Fields/FieldsScreen";

// Make a stack to add screen to screen navigation since you have tab navigation set up
const Stack = createStackNavigator();
const StoresStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="StoresList" component={StoresScreen} />
    <Stack.Screen name="StoreDetails" component={StoreDetailsScreen} />
  </Stack.Navigator>
);

const ContractStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="'ContractsList" component={ContractsScreen} />
    <Stack.Screen name="ContractDetails" component={ContractDetailsScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBar={(props) => <TabBar {...props} />}
    screenOptions={{
      tabBarStyle: {
        backgroundColor: "#f0f0f0",
        height: 60,
      },
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Todo" component={TodoScreen} />
    <Tab.Screen name="Barcodes" component={BarCodesScreen} />
    <Tab.Screen name="Stores" component={StoresStack} />
    <Tab.Screen name="Contracts" component={ContractStack} />
    <Tab.Screen name="Fields" component={FieldsScreen} />
  </Tab.Navigator>
);

const MainApp = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default function App() {
  const token = process.env.EXPO_PUBLIC_TOKEN;

  return (
    <Provider store={store}>
      <TokenProvider token={token}>
        <MainApp />
      </TokenProvider>
    </Provider>
  );
}
