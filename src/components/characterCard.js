//import liraries
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {characterCardStyles} from '../styles/characters/characterCard';

// create a component
const CharacterCard = ({item}) => {
  return (
    <View style={characterCardStyles.container}>
      <View style={characterCardStyles.imageContainer}>
        <Image
          resizeMode="contain"
          style={characterCardStyles.image}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={characterCardStyles.infoContainer}>
        <Text style={characterCardStyles.name}>{item.name}</Text>
        <Text style={characterCardStyles.gender}>Gender: {item.gender}</Text>
        <Text style={characterCardStyles.status}>Status: {item.status}</Text>
        <Text style={characterCardStyles.species}>Species: {item.species}</Text>
      </View>
    </View>
  );
};

// define your styles

//make this component available to the app
export default CharacterCard;
