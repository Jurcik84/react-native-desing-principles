import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation';




// CONST

const { width, height } = Dimensions.get('window');




// CONST END






// DETAIL SCREEN
class DetailScreen extends React.Component {
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: '#f8f8f8',
      margin: 10,
      borderBottomWidth: 0

    },

  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{ padding: 14 }}
        >James Clarck</Text>
        <Image
          style={
            {
              width: width,
              height: 300,
              margin: 1,

              backgroundColor: '#fff'
            }}

          source={require('./assets/pic1.jpg')} />
        <View
          style={{

          }}
        >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 14 
           }}>
          <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: '#ccc'}}></View>
          <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: '#ccc'}}></View>
        </View>
          <Text
            style={{
              padding: 14
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          <Text
            style={{
              padding: 14
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          <View style={{ flexDirection: 'row', padding: 14, justifyContent: 'space-between' }}>
            <Text
            style={{
              color: '#ccc'
            }}
            >4,8k Likes</Text>
            <Text
              style={{
                color: '#ccc'
              }}
            >1,2k Comments</Text>

          </View>
        </View>
      </View>
    )
  }
}



class App extends React.Component {

  static navigationOptions = {
    title: 'Discover',
    headerStyle: {
      backgroundColor: '#f8f8f8',
      margin: 10,
      borderBottomWidth: 0

    },
    headerRight: (
       <View
       style={{
         width: 20,
         height: 20,
         backgroundColor: '#ccc',
         borderRadius: 10

       }}
       ></View>
    ),
    headerLeft: (
      <View
      style={{
        width: 20,
        height: 20,
        backgroundColor: '#ccc',
        borderRadius: 10
      }}
      ></View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {
            [1, 2, 3, 4, 5].map((item, index) => <View

              key={index} style={{
                flex: 1,
                marginBottom: 40,
              }}>

              <View style={{

                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 10
              }}>

                <Image
                  style={
                    {
                      width: 40,
                      height: 40,
                      margin: 1,
                      borderRadius: 20,
                      backgroundColor: '#fff'
                    }}

                  source={require('./assets/pic1.jpg')} />
                <Text
                  onPress={() => this.props.navigation.navigate('DetailScreen')}
                  style={{ position: 'absolute', left: 60 }}
                >James Clarck</Text>
                <Text style={{ color: '#ccc' }}>210 Followers</Text>
              </View>
              <View style={{ flexDirection: 'row', }}>
                <Image
                  style={{ width: 200, height: 202, margin: 1 }}
                  source={require('./assets/pic1.jpg')} />
                <View>
                  <Image
                    style={{ width: 100, height: 100, margin: 1 }}
                    source={require('./assets/pic2.jpg')} />

                  <Image
                    style={{ width: 100, height: 100, margin: 1, }}
                    source={require('./assets/pic3.jpg')} />

                </View>
                <Image
                  style={{ width: 80, height: 202, margin: 1 }}
                  source={require('./assets/pic4.jpg')} />
              </View>
            </View>)
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',

    // marginLeft: 5,
    // marginRight: 5,

  },
});


export default createStackNavigator({
  Home: {
    screen: App,
  },
  DetailScreen: {
    screen: DetailScreen
  }
})
