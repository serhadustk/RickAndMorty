//import liraries
import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {spinnerStyles} from '../styles/components/spinner';
import {Colors} from '../theme/colors';

// create a component
const Spinner = () => {
  return (
    <View style={spinnerStyles.container}>
      <ActivityIndicator size={'large'} color={Colors.primary} />
    </View>
  );
};

//make this component available to the app
export default Spinner;
