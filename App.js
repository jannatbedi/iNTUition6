import React, { Component } from 'react';
import { Button, Linking, View, StyleSheet } from 'react-native';
import { WebBrowser } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Open URL with ReactNative.Linking"
          onPress={this._handleOpenWithLinking}
          style={styles.button}
        />
      </View>
    );
  }
  
  _handleOpenWithLinking = () => {
    //Linking.openURL('https://apps.8thwall.com/8thWall/aframe_manipulate/');
    Linking.openURL('https://jannatbedi.github.io/index.html');
  }
  
  _handleOpenWithWebBrowser = () => {
    //WebBrowser.openBrowserAsync('https://apps.8thwall.com/8thWall/aframe_manipulate/');
    WebBrowser.openBrowserAsync('https://jannatbedi.github.io/index.html');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  button: {
    marginVertical: 10,
  },
});
