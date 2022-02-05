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
  ImageBackground,
} from 'react-native';
import {StatusBarDark} from '../Custom/CustomStatusbar';
import Explore from './Explore';
import Excercises from './Exercises';
import Test from './Test';
const {height} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#EFF2F4', flex: 1}}>
      <StatusBarDark />
      <View style={{backgroundColor: '#fff'}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Hi, Pradeep</Text>
          <View style={styles.class}>
            <Text style={styles.classText}>CBSE - XII</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.subtext}>Let’s start learning</Text>
          <Image
            style={styles.notification}
            source={require('../images/notification2.png')}
          />
        </View>
      </View>
      <ScrollView decelerationRate={0.5} >
        <Text style={styles.texted}>
          Goyal Brothers Prakashan Online Support
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginHorizontal: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('ActiveBooks')}>
            <View style={styles.container}>
              <View style={styles.round}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    alignSelf: 'center',
                    marginTop: 7,
                  }}
                  source={require('../images/headphones.png')}
                />
              </View>
              <Text style={styles.containerText}>Online Support</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ExploreBooks')}>
            <View style={styles.container2}>
              <View style={styles.round}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    alignSelf: 'center',
                    marginTop: 7,
                  }}
                  source={require('../images/globe.png')}
                />
              </View>
              <Text style={styles.containerText}>Explore Books</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.texted}>Explore Our Categories</Text>
        <Explore />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.texted}>Interactive Exercises</Text>
          <Text style={styles.endText}>View all</Text>
        </View>
        <Excercises />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.texted}>Test Series</Text>
          <Text style={styles.endText}>View all</Text>
        </View>
        <Test />
        <View
          style={{
            padding: 10,
            backgroundColor: '#ffffffaa',
            marginTop: 20,
          }}>
          <Image
            style={{width: 155, height: 31, marginHorizontal: 10}}
            source={require('../images/logo.png')}
          />
          <View style={{flexDirection: 'row', marginHorizontal: 15}}>
            <Image
              style={{
                width: 20,
                height: 20,
                marginTop: 20,
                margin: 3,
              }}
              source={require('../images/facebook.png')}
            />
            <Image
              style={{
                width: 20,
                height: 20,
                marginTop: 20,
                margin: 3,
              }}
              source={require('../images/linkedin.png')}
            />
            <Image
              style={{
                width: 20,
                height: 20,
                marginTop: 20,
                margin: 3,
              }}
              source={require('../images/twitter.png')}
            />
            <Image
              style={{
                width: 20,
                height: 20,
                marginTop: 20,
                margin: 3,
              }}
              source={require('../images/youtube.png')}
            />
          </View>
          <Text
            style={{
              marginTop: -45,
              marginLeft: 'auto',
              fontSize: 12,
              color: '#333333',
            }}>
            1800201234
          </Text>
          <Text
            style={{
              marginLeft: 'auto',
              marginTop: 5,
              fontSize: 12,
              color: '#333333',
              marginBottom: 20,
            }}>
            support@gbp.com
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'AvenirLTStd-Heavy',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 40,
    color: '#1E1F20',
    marginHorizontal: 30,
  },
  texted: {
    fontFamily: 'AvenirLTStd-Heavy',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#1E1F20',
    marginHorizontal: 20,
  },
  endText: {
    fontFamily: 'AvenirLTStd-Heavy',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#0253B3',
    marginHorizontal: 20,
  },
  subtext: {
    fontFamily: 'AvenirLTStd-Medium',
    fontSize: 12,
    fontWeight: '500',
    color: '#333333',
    marginHorizontal: 30,
    lineHeight: 25,
    marginBottom: 10,
  },
  class: {
    width: 80,
    height: 20,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#0253B3',
    backgroundColor: '#0253B3',
    marginTop: 40,
    marginLeft: -20,
  },
  classText: {
    fontFamily: 'AvenirLTStd-Medium',
    fontSize: 11,
    fontWeight: '500',
    color: '#fff',
    marginHorizontal: 5,
    marginTop: 2,
  },
  notification: {
    width: 21,
    height: 25,
    marginLeft: 'auto',
    marginHorizontal: 30,
    marginTop: -10,
  },
  container: {
    width: 164,
    height: 100,
    backgroundColor: '#264653',
    // marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  container2: {
    width: 164,
    height: 100,
    backgroundColor: '#F4A261',
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  round: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 40,
    height: 40,
    marginHorizontal: 15,
    marginTop: 10,
  },
  containerText: {
    fontFamily: 'AvenirLTStd-Heavy',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
    marginHorizontal: 20,
  },
});
