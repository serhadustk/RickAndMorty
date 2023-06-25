//import liraries
import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Spinner from '../../components/Spinner';
import CharacterCard from '../../components/characterCard';
import {getCharacters} from '../../redux/actions/charactersActions';
import {charactersStyles} from '../../styles/characters/characters';

// create a component
const Characters = () => {
  const characters = useSelector(state => state?.characters?.characters);
  const pending = useSelector(state => state?.characters?.pending);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  }, []);
  return (
    <View style={charactersStyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={characters}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CharacterCard item={item} />}
        />
      )}
    </View>
  );
};

//make this component available to the app
export default Characters;
