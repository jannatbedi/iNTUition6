import React, { useState, useEffect, Component } from 'react';
import { Animated, Linking, View, StyleSheet, TouchableHighlight, TouchableOpacity, Image, Text} from 'react-native';
import { WebBrowser } from 'expo';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const furnitureChair= [
  {
     name: 'Chair',
     url: 'https://www.ikea.com/PIAimages/0681482_PE720106_S5.JPG?f=xs', 
  }
]
const furnitureSofas = [
  {
    name: 'Sofas',
    url: 'https://www.ikea.com/PIAimages/0175610_PE328883_S5.JPG?f=s'
  }
 ]

 const wall= [
  {
     name: 'Chair',
     url: 'https://ae01.alicdn.com/kf/HTB1GSspKpXXXXa9XXXXq6xXFXXXC/Embossed-Textile-Import-Non-Woven-3D-ikea-Wallpapers-Roll-Chinese-wallpaper-flowers-stickers-Bedroom-3d-stereoscopic.jpg'
  },
 ]

 const elec= [
  {
     name: 'Electronic',
     url: 'https://images-na.ssl-images-amazon.com/images/I/81ZBWDMY0YL._SL1500_.jpg'
  },
 ]

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card title="Sofa">{
          furnitureSofas.map((f, i) => {
          return (
          <View key={i} >
              <TouchableOpacity onPress={this._handleOpenWithLinkingSofa} style = {styles.btn}>
              <Image style = {styles.img} source ={{uri:f.url}} />
              <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}> 
              </View>
              </TouchableOpacity>
          </View>
            );
          })
        }
        </Card>
        <Card title="Chair">{
          furnitureChair.map((f, i) => {
          return (
          <View key={i} >
              <TouchableOpacity onPress={this._handleOpenWithLinkingChair} style = {styles.btn}>
              <Image style = {styles.img} source ={{uri:f.url}} />
              <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}> 
              </View>
              </TouchableOpacity>
          </View>
            );
          })
        }
        </Card>
        <Card title="Wallpaper">{
          wall.map((w, i) => {
          return (
          <View key={i}>
            <TouchableOpacity onPress={this._handleOpenWithLinkingWall} style = {styles.btn}>
            <Image style = {styles.img} source ={{uri:w.url}} />
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}> 
            </View>
            </TouchableOpacity>
          </View>
            );
          })
        }
        </Card>
        <Card title="Electronic">{
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
  
  _handleOpenWithLinkingSofa = () => {
    //Linking.openURL('https://apps.8thwall.com/8thWall/aframe_manipulate/');
    Linking.openURL('https://jannatbedi.github.io/index.html');
  }
  _handleOpenWithLinkingChair = () => {
    //Linking.openURL('https://apps.8thwall.com/8thWall/aframe_manipulate/');
    Linking.openURL('https://jannatbedi.github.io/index.html');
  }
  _handleOpenWithLinkingWall = () => {
    //Linking.openURL('https://apps.8thwall.com/8thWall/aframe_manipulate/');
    Linking.openURL('https://jannatbedi.github.io/index.html');
  }
  _handleOpenWithLinkingElect = () => {
    //Linking.openURL('https://apps.8thwall.com/8thWall/aframe_manipulate/');
    Linking.openURL('https://jannatbedi.github.io/index.html');
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
    marginVertical: 50,
    justifyContent: 'flex-start'
  },
  card: {
    justifyContent: 'center',
    marginVertical: 150, 
    width: 250,
    height: 80,
  },
  cardImageRadius: {
    height: 200
  },
  img:{
    height:80,
    width:100,
    marginRight:5,
  },
  btn:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 50
  }


});

