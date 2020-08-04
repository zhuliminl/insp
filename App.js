/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Root from './src'



const App: () => React$Node = () => {
  useEffect(() => {
    SplashScreen.hide()
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Root />
      </SafeAreaView>
    </>
  );
};

export default App;
