import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

import DefaultInput from "../UI/DefaultInput/DefaultInput";

placeInput = props => (
      <DefaultInput 
        placeholder="Place Name" 
        value={props.placeName} 
        onChangeText={props.onChangeText}
      />
    );

export default placeInput;