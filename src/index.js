import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PostScreen from "./screens/PostScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PostScreen"
          component={PostScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tabes = createMaterialBottomTabNavigator();
function TabsNavigation() {
  return (
    <Tabes.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: "tomato" }}
    >
      <Tabes.Screen name="HomeScreen"
      component={HomeScreen} 
      options={{
        tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
      }}/>

      <Tabes.Screen name="LoginScreen"
       component={LoginScreen}
       options={{
        tabBarLabel: 'Login',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cat" color={color} size={26} />
        ),
      }}/>
      <Tabes.Screen name="PostScreen"
       component={PostScreen}
       options={{
        tabBarLabel: 'Post',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="rabbit" color={color} size={26} />
        ),
      }}/>
      <Tabes.Screen name="RegisterScreen"
       component={RegisterScreen}
       options={{
        tabBarLabel: 'Registro',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="dog" color={color} size={26} />
        ),
      }}/>
    </Tabes.Navigator>
  );
}