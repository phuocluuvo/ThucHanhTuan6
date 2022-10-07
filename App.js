import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";

import MainScreen from "./screens/MainScreen";
import ToDoNoAPI from "./screens/ToDoNoAPI";
import TodoWithAPI from "./screens/TodoWithAPI";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View className="flex-1 bg-white">
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen name="ToDoNoAPI" component={ToDoNoAPI} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="TodoWithAPI" component={TodoWithAPI} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
