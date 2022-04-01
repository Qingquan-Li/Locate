import {
  FontAwesome,
  Entypo,
  AntDesign,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import DataScreen from "../Screens/DataScreen";
import MapScreen from "../Screens/MapScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="DataScreen">
      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="md-map-outline" size={24} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Data"
        component={DataScreen}
        options={{
          title: "DataScreen",
          headerShown: false,
          tabBarIcon: () => <Feather name="database" size={24} color="black" />,
          /*headerStyle: {
            backgroundColor: "ffffff",
          },*/
        }}
      />
    </BottomTab.Navigator>
  );
}