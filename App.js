import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/tabNavigation';
import {Provider} from 'react-redux';
import store from './src/redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
}
