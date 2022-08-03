import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Store from '../../pages/store';


const Stack = createNativeStackNavigator();

function AppRouting() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Store} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouting;