import AsyncStorage from '@react-native-async-storage/async-storage';

const INTRO_SHOWN_KEY = 'intro_shown';

export const setIntroShown = async () => {
  try {
    await AsyncStorage.setItem(INTRO_SHOWN_KEY, 'true');
  } catch (error) {
    console.error('Error setting intro shown status', error);
  }
};


export const isIntroShown = async () => {
    try {
      const value = await AsyncStorage.getItem(INTRO_SHOWN_KEY);
      return value === 'true';
    } catch (error) {
      console.error('Error getting intro shown status', error);
      return false;
    }
  };
