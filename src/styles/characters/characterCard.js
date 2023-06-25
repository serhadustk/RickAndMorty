import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
// define your styles
const characterCardStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    borderRadius: 5,
  },
  infoContainer: {flex: 2, marginLeft: 5},
  imageContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {width: '100%', height: undefined, aspectRatio: 1},
  name: {color: Colors.black, fontSize: 18, fontWeight: '600'},
  gender: {color: Colors.gray, fontSize: 16},
  status: {color: Colors.gray, fontSize: 16},
  species: {color: Colors.gray, fontSize: 16},
});

export {characterCardStyles};
