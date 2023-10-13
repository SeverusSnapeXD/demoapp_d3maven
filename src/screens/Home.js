import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../config/colors';
import {useApp} from '../store/AppContext';

const Home = () => {
  const {user} = useApp();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name={'location-outline'}
          size={24}
          style={{marginRight: 5}}
          color={colors.primary}
        />
        <View>
          <Text style={{fontWeight: '500'}}>Delivery Location</Text>
          <Text style={{fontWeight: '500', color: '#000'}}>
            79 Rosewell Avenue
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Search</Text>
      </TouchableOpacity>

      <View style={{marginTop: 10}}>
        <Text style={{fontSize: 18, fontWeight: '700', color: '#000'}}>
          Hello {user.email}!
        </Text>
        <Text>Start your day with the right mind</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginVertical: 15,
  },
  btnText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#888',
  },
});
