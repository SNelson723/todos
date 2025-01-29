import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "./components/Home/HomeScreen";
import TodoScreen from "./components/ToDo/TodoScreen";
import BarCodesScreen from "./components/Bar Codes/BarCodesScreen";
import StoresScreen from "./components/Stores/StoresScreen";

const Stack = createStackNavigator();

const MainApp = () => {
  const token = process.env.EXPO_PUBLIC_TOKEN;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* initial screen routed to on load === Home */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Todo" component={TodoScreen} />
        <Stack.Screen
          name="Barcodes"
          component={BarCodesScreen}
          initialParams={{ token }}
        />
        <Stack.Screen
          name="Stores"
          component={StoresScreen}
          initialParams={{ token }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
