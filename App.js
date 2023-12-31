import React from 'react';
import 'react-native-gesture-handler'

import { UserProvider } from './src/store/context/userContext';
import Toast from 'react-native-toast-message';
import { DialogProvider } from './src/store/context/dialogContext';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';

function App() {

  return (
    <DialogProvider>
      <UserProvider>
        <AppNavigator />
        <StatusBar
          barStyle='dark-content'
        />
        <Toast />
      </UserProvider>
    </DialogProvider>
  );
}

export default App;
