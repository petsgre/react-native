import React from "react";
import { AppRegistry, View, Text, Button, StyleSheet, Image } from "react-native";
import Swiper from 'react-native-swiper'

export default class Test extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Swiper autoplay={true} style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Image
              style={{ width: 50, height: 50 }}
              source={require('../images/banner.png')}
            />
          </View>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold'
  }
});