import GlobalContextProvider from '@context/GlobalContext';
import MainStack from '@navigation/MainStack';
import React from 'react';
import {StyleSheet} from 'react-native';

const App = () => {
  return (
    <GlobalContextProvider>
      <MainStack />
    </GlobalContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
