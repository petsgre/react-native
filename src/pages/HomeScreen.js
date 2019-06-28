
import React from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper'
import sort from '../sort_url.js'

function List(data) {
  const index = data.children
  return (
    <View style={data.style}>
      <Image
        style={{ width: 50, height: 50 }}
        source={sort[index].img}
      />
      <Text style={{ paddingTop: 10 }}>{sort[index].title || 'default'}</Text>
    </View>
  )
}
class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      status: '状态1',
      dataSource: []
    };
    this.getData = this.getData.bind(this)
  }
  data = []
  componentDidMount() {
    console.log('mounted');
  }
  getData() {
    this.setState({
      status: '修改了状态'
    })
    const that = this
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        that.data = responseJson.movies

        that.setState({
          dataSource: responseJson.movies
        });

      })
      .catch((error) => {
        console.error(error);
      });

  }
  render() {
    let Arr = []
    for (let index = 0; index < 4; index++) {
      Arr.push(<List style={{ flex: 1, width: '25%', alignItems: 'center', backgroundColor: '#fff', padding: 10 }} key={index}>{index}</List>)
    }
    let list = []
    for (let index = 0; index < 20; index++) {
      list.push(<TouchableOpacity style={styles.list} key={index}
        onPress={() => this.props.navigation.navigate('Test')}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        />
        <View style={{ width: 100, flex: 1, paddingLeft: 10 }}>
          <Text style={styles.title}>驴迹科技集团</Text>
          <Text numberOfLines={1} style={styles.title1}>阿斯顿，阿斯顿把上面的哈就是电话卡就啊啥的空间啊函数的空间啊啥的空间</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ width: '50%', textAlign: 'left', fontSize: 12 }}>20000收听</Text>
            <Text style={{ width: '50%', textAlign: 'right', fontSize: 12 }}>220m</Text>
          </View>
        </View>
      </TouchableOpacity>)
    }
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ height: 300 }}>
            <Swiper autoplay={true} style={styles.wrapper} showsButtons={false}>
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
          <View>
            <View style={{ color: 'red', flex: 1, flexDirection: 'row', justifyContent: 'center' }}>{Arr}</View>
          </View>
          {list}
        </ScrollView>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  title: {
    fontSize: 18
  },
  title1: {
    fontSize: 12,
    marginTop: 4
  },
  title2: {
    fontSize: 12,
    textAlign: 'left'
  },
  list: {
    height: 70,
    width: '100%',
    padding: 10,
    borderTopColor: '#f2f2f2',
    borderTopWidth: 1,
    flex: 1,
    flexDirection: 'row'
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  wrapper: {
    height: 300
  },
  slide1: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    height: 300,
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

export default HomeScreen