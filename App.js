import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import HomeScreen from "./components/Home/HomeScreen";
import TodoScreen from "./components/ToDo/TodoScreen";
import BarCodesScreen from "./components/BarCodes/BarCodesScreen";
import StoresScreen from "./components/Stores/StoresScreen";

// Bearer Token Prop
import { TokenProvider } from "./src/token";

// Tab bar and navigation structure
import TabBar from "./components/NavBar/NavBar";

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Todo" component={TodoScreen} />
    <Tab.Screen name="Barcodes" component={BarCodesScreen} />
    <Tab.Screen name="Stores" component={StoresScreen} />
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
