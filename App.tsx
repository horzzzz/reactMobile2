import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from './src/Screens/NotificationScreen';
import NotificationAddScreen from './src/Screens/NotificationAddScreen';
import { Text, View } from 'react-native';






const Stack = createStackNavigator();
const App: React.FC = () => {
  return (
    <View style = {{flex: 1}}>
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="NotificationAddScreen" component={NotificationAddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
};

export default App;
