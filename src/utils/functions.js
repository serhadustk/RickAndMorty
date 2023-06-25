import {BookSaved, Location, Element2, Profile} from 'iconsax-react-native';
import {CHARACTERS, EPISODES, LOCATIONS, PROFILE} from './routes';

const setTabIcon = (name, focused, color, size) => {
  if (name === CHARACTERS) {
    return (
      <BookSaved
        size={size}
        color={color}
        variant={focused ? 'Bulk' : 'Outline'}
      />
    );
  }
  if (name === LOCATIONS) {
    return (
      <Location
        size={size}
        color={color}
        variant={focused ? 'Bulk' : 'Outline'}
      />
    );
  }
  if (name === EPISODES) {
    return (
      <Element2
        size={size}
        color={color}
        variant={focused ? 'Bulk' : 'Outline'}
      />
    );
  }
  if (name === PROFILE) {
    return (
      <Profile
        size={size}
        color={color}
        variant={focused ? 'Bulk' : 'Outline'}
      />
    );
  }
};

export {setTabIcon};
