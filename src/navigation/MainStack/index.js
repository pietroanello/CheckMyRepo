import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Edit from '@screens/Edit';
import Home from '@screens/Home';
import ROUTES from '@utils/routes';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const MainStack = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name={ROUTES.Home} component={Home} />
          <Stack.Screen name={ROUTES.Edit} component={Edit} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
