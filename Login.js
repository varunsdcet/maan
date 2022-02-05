import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import {StatusBarDark} from '../Custom/CustomStatusbar';
import {TextField} from 'react-native-material-textfield';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const {height} = Dimensions.get('window');
export const CustomInputField = props => (
  <>
    <View style={styles.middleView}>
      <TextField
        containerStyle={styles.tfStyle}
        disableUnderline={true}
        tintColor="#8D92A3"
        {...props}
      />
    </View>
  </>
);

const Login = ({navigation}) => {

const logincheckout = () =>{
  setTimeout(() => {
  navigation.navigate('TabNavigator')
}, 300);

}

  return (
    <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <StatusBarDark />
      <KeyboardAwareScrollView>
        <Image style={styles.image} source={require('../images/logo.png')} />
        <Text style={styles.text}>Welcome ! </Text>
        <Text style={styles.subtext}>Sign in to continue </Text>

        <CustomInputField
          label="Mobile/Username"
          //   defaultValue={state.emailphone}
          useNativeDriver={true}
        />
        <CustomInputField
          label="Password"
          //   defaultValue={state.password}
          useNativeDriver={true}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.bottomtext}>Forgot Password ?</Text>
        </TouchableOpacity>
        <TouchableRipple
          style={styles.touch}
          onPress={() => logincheckout()}
          rippleColor="rgba(0, 0, 0, .32)"
        >
    <Text style={styles.touchtext}>Login</Text>
        </TouchableRipple>

        <View
          style={{
            flexDirection: 'row',
            width: '85%',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.Line} />
          <Text style={styles.continue}>OR</Text>
          <View style={styles.Line} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginHorizontal: 20,
          }}>
          <TouchableOpacity style={styles.facebook}>
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.fb} source={require('../images/fb.png')} />
              <Text style={styles.fbtext}>Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.google}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.gg}
                source={require('../images/google.png')}
              />
              <Text style={styles.googletext}>Google</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.bottom}>
          Still without account?{' '}
          <TouchableOpacity onPress={() => navigation.push('Ragister')}>
            <Text
              style={{
                color: '#FA6400',
                borderBottomWidth: 1,
                borderBottomColor: '#FA6400',
              }}>
              Create one
            </Text>
          </TouchableOpacity>
        </Text>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    width: 233,
    height: 48,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 80,
  },
  text: {
    fontFamily: 'AvenirLTStd-Heavy',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 60,
    color: '#1E1F20',
    marginHorizontal: 20,
  },
  subtext: {
    fontFamily: 'AvenirLTStd-Medium',
    fontSize: 20,
    fontWeight: '600',
    // marginTop: 10,
    color: '#8F92A1',
    marginHorizontal: 20,
  },
  middleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tfStyle: {
    // marginLeft: 30,
    width: '85%',
    marginHorizontal: 30,
  },
  bottomtext: {
    fontFamily: 'AvenirLTStd-Roman',
    fontSize: 16,
    fontWeight: '400',
    color: '#8D92A3',
    marginTop: 10,
    alignSelf: 'flex-end',
    marginHorizontal: 30,
  },
  touch: {
    padding: 10,
    marginHorizontal: 30,
    borderRadius: 5,
    backgroundColor: '#0253B3',
    marginTop: 40,
    elevation: 15,
  },
  touchtext: {
    fontFamily: 'AvenirLTStd-Medium',
    fontSize: 22,
    fontWeight: '500',
    alignSelf: 'center',
    color: '#ffffff',
  },
  Line: {
    height: 1,
    width: Dimensions.get('window').width / 3,
    borderRadius: 5,
    backgroundColor: '#979797',
    marginTop: 40,
    marginLeft: 15,
  },
  continue: {
    fontFamily: 'nunito',
    fontSize: 15,
    fontWeight: '700',
    color: '#8F92A1',
    marginTop: 35,
    marginLeft: 10,
  },
  facebook: {
    width: 150,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#1773EB',
    elevation: 2,
    alignSelf: 'center',
    marginTop: 20,
  },
  fb: {
    width: 10,
    height: 20,
    marginHorizontal: 20,
    marginTop: 15,
  },
  fbtext: {
    fontFamily: 'AvenirLTStd-Medium',
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    marginTop: 12,
  },
  google: {
    width: 150,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 2,
    alignSelf: 'center',
    marginTop: 20,
  },
  googletext: {
    fontFamily: 'AvenirLTStd-Medium',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginTop: 10,
  },
  gg: {
    width: 25,
    height: 25,
    marginHorizontal: 20,
    marginTop: 12,
  },
  bottom: {
    textAlign: 'center',
    marginTop: '30%',
    fontFamily: 'AvenirLTStd-Medium',
    fontSize: 16,
    fontWeight: '500',
    color: '#8F92A1',
    marginBottom: 10,
  },
});
