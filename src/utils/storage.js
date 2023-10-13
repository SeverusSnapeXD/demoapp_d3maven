import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to read data from AsyncStorage
export const getFromStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error reading from AsyncStorage:', error);
  }
};

// Function to save data to AsyncStorage
export const saveToStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to AsyncStorage:', error);
  }
};

// Function to delete data from AsyncStorage
export const removeFromStorage = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from AsyncStorage:', error);
  }
};

// Function to clear all data from AsyncStorage
export const clearAllStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error);
  }
};
