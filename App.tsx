import { StatusBar } from 'react-native';
import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import { Provider } from "react-redux";
import { persistor, store } from './src/reduxStore/store';
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle={'dark-content'} translucent backgroundColor="transparent" />
        <MainNavigation />
      </PersistGate>
    </Provider>
  )
}

export default App