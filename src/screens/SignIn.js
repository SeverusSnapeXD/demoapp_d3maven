import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../config/colors';
import {useApp} from '../store/AppContext';

const SIZE = 15;

const SignIn = ({navigation}) => {
  const {setUser} = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [marked, setMarked] = useState(false);

  const handlePress = () => {
    const userObj = {email, password};
    setUser(userObj);
    navigation.navigate('Tabs');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={{marginTop: 30, marginBottom: 10}}>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Value"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Value"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={{...styles.row, justifyContent: 'flex-start'}}>
          <TouchableOpacity
            style={[styles.chechbox, marked ? {backgroundColor: '#222'} : null]}
            onPress={() => setMarked(a => !a)}
          />
          <Text style={styles.label}>Remember me</Text>
        </View>
        <Text style={styles.label}>Forgot Password</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity style={{marginLeft: 5}}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 60,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  input: {
    backgroundColor: '#ddd',
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 3,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: '#888',
  },
  label: {
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chechbox: {
    height: SIZE,
    width: SIZE,
    borderWidth: 1,
    marginRight: 5,
  },
  btn: {
    backgroundColor: colors.primary,
    padding: 15,
    marginVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontWeight: '700',
  },
});
