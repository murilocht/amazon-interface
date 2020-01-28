import React from "react";
import { YellowBox } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import HomeScreen from "./screens/HomeScreen";
import DrawerComponent from "./components/DrawerComponent";

YellowBox.ignoreWarnings(["Warning", "VirtualizedList"]);

export default function App() {
  return <AppContainer />;
}

const AppNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: "Início"
      }
    }
  },
  {
    initialRouteName: "HomeScreen",
    drawerPosition: "left",
    contentComponent: DrawerComponent
  }
);

const AppContainer = createAppContainer(AppNavigator);
