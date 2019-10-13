import React, { useState, useEffect, Component } from 'react';
import { Animated, Linking, View, StyleSheet, TouchableHighlight, TouchableOpacity, Image, Text} from 'react-native';
import { WebBrowser } from 'expo';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor:'#d1f2eb'}}>
        <Image
          style={{width: 500, height: 200}}
          source={{uri: 'https://clipart.info/images/ccovers/1509729269christmas-lights-png-picture.png'}}
        />
        <Image
          style={{width: 200, height: 200, margin:40}}
          source={{uri: 'https://pixy.org/src/449/4497838.png'}}
        />
        <Text style={styles.decor}>Decor.IT</Text>
        <Button
          title="Learn More"
          onPress={() => this.props.navigation.navigate('Canvas')}
        />
      </View>
    );
  }
}

const curtain= [
  {
     url: 'https://cdn10.bigcommerce.com/s-9ese1/products/1398/images/78367/All-Seasons-Faux-Silk-Blackout-Curtains-ColAllSeasons_image1__11255.1555022966.600.600.jpg?c=2', 
  }
]
const mirror = [
  {
    url: 'https://4.imimg.com/data4/AE/UF/MY-36224376/designer-mirror-500x500.jpg'
  }
 ]

 const poster= [
  {
     url: 'https://i.ebayimg.com/images/g/6mQAAOSwZgVddVYV/s-l300.jpg'
  },
 ]

 const elec= [
  {
     url: 'https://images-na.ssl-images-amazon.com/images/I/81ZBWDMY0YL._SL1500_.jpg'
  },
 ]

class CanvasScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card title="Curtain">{
          curtain.map((f, i) => {
          return (
          <View key={i} style={{alignItems:'center'}}>
              <TouchableOpacity onPress={this._handleOpenWithLinkingCurtain} style = {styles.btn}>
              <Image style = {styles.img} source ={{uri:f.url}} />
              <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}> 
              </View>
              </TouchableOpacity>
          </View>
            );
          })
        }
        </Card>
        <Card title="Mirror">{
          mirror.map((f, i) => {
          return (
          <View key={i} >
              <TouchableOpacity onPress={this._handleOpenWithLinkingMirror} style = {styles.btn}>
              <Image style = {styles.img} source ={{uri:f.url}} />
              <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}> 
              </View>
              </TouchableOpacity>
          </View>
            );
          })
        }
        </Card>
        <Card title="Statue">{
          poster.map((w, i) => {
          return (
          <View key={i}>
            <TouchableOpacity onPress={this._handleOpenWithLinkingPoster} style = {styles.btn}>
            <Image style = {styles.img} source ={{uri:w.url}} />
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}> 
            </View>
            </TouchableOpacity>
          </View>
            );
          })
        }
        </Card>
        <Card title="Electronics">{
          elec.map((e, i) => {
          return (
          <View key={i}>
          <TouchableOpacity onPress={this._handleOpenWithLinkingElect} style = {styles.btn}>
            <Image style = {styles.img} source ={{uri:e.url}} />
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}> 
            </View>
            </TouchableOpacity>
          </View>
            );
          })
        }
        </Card>
     </View>
    );
  }
  
  _handleOpenWithLinkingCurtain = () => {
    //Linking.openURL('https://apps.8thwall.com/8thWall/aframe_manipulate/');
    Linking.openURL('https://jannatbedi.github.io/index3.html');
  }
  _handleOpenWithLinkingPoster = () => {
    //Linking.openURL('https://apps.8thwall.com/8thWall/aframe_manipulate/');
    Linking.openURL('https://jannatbedi.github.io/index5.html');
  }
  _handleOpenWithLinkingMirror = () => {
    //Linking.openURL('https://apps.8thwall.com/8thWall/aframe_manipulate/');
    Linking.openURL('https://jannatbedi.github.io/index4.html');
  }
  _handleOpenWithLinkingElect = () => {
    //Linking.openURL('https://apps.8thwall.com/8thWall/aframe_manipulate/');
    Linking.openURL('https://jannatbedi.github.io/index7.html');
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Canvas: CanvasScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1f2eb'
  },
  button: {
    marginVertical: 40,
    justifyContent: 'flex-start'
  },
  card: {
    justifyContent: 'center',
    marginVertical: 100, 
    width: 250,
    height: 50,
  },
  cardImageRadius: {
    height: 200
  },
  img:{
    height:60,
    width:80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  decor:{
    fontSize: 30,
    fontWeight: 'bold', 
  },
  btn:{
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    height: 50,
    justifyContent: 'center',
    margin: 1
  }


});

