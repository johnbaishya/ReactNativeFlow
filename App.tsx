/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  AppState,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {Provider, useSelector} from "react-redux"; 
import store, { RootState } from './src/Redux/store';
import Route from './src/Navigations/Route';
import { PaperProvider } from 'react-native-paper';
import {customDarkTheme, customLightTheme } from './src/Theme/theme';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <Provider store={store}>
        <Route/>
    </Provider>
  );
}

export default App;
