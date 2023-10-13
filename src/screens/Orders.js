import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useApp} from '../store/AppContext';
const IconSize = 25;

const Orders = () => {
  const {data} = useApp();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Image source={item.image} style={{width: '100%', height: 100}} />
        <View style={styles.container}>
          <Text style={{color: '#000', fontWeight: '500'}}>{item.title}</Text>
          <Text>{item.restaurant}</Text>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View>
        <Image
          source={require('../assets/images/bg.jpeg')}
          style={styles.rest}
        />
        <View style={styles.icons}>
          <Icon name={'arrow-back'} color={'#fff'} size={IconSize} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name={'search'}
              color={'#fff'}
              size={IconSize}
              style={{marginRight: 5}}
            />
            <Icon name={'heart-outline'} color={'#fff'} size={IconSize} />
          </View>
        </View>
        <Text style={styles.title}>La Vida Cousines</Text>
      </View>
      <View style={{padding: 15}}>
        <FlatList
          data={data}
          keyExtractor={(_, index) => index}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </View>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  rest: {
    width: '100%',
    height: 250,
  },
  icons: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 15,
  },
  title: {
    position: 'absolute',
    fontSize: 20,
    color: '#fff',
    bottom: 10,
    left: 15,
    fontWeight: '600',
  },
  card: {
    width: '46%',
    // padding: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    overflow: 'hidden',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 10,
  },
  container: {
    padding: 10,
  },
  price: {
    fontWeight: '700',
    color: '#000',
    fontSize: 20,
  },
});
