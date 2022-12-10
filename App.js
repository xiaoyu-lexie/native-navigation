import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true} // 这个是为了解决"Tried to synchronously call anonymous function from a different thread. with DrawerNavigator"的报错
      screenOptions={{
        headerStyle: { backgroundColor: "#93d5f1" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#82c8a5" }, //drawer的sceneContainerStyle等价于native stack的contentStyle
      }}
    >
      <Drawer.Screen name="drawer cate name" component={CategoriesScreen} />
      <Drawer.Screen name="drawer favo" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#93d5f1" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#82c8a5" },
        }}
      >
        <Stack.Screen
          name="categories"
          component={DrawerNavigator}
          options={{ headerShown: false }} //这里hidden stack的title，不然这一页会有2个header，一个是drawer header，一个是stack header，用这个方法隐去stack的header
        />

        <Stack.Screen name="overview" component={MealsOverviewScreen} />

        <Stack.Screen name="mealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
