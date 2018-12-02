//import React from 'react';
//import { ExpoConfigView } from '@expo/samples';
//
//export default class SettingsScreen extends React.Component {
//
//  render() {
//    /* Go ahead and delete ExpoConfigView and replace it with your
//     * content, we just wanted to give you a quick view of your config */
//    return <ExpoConfigView />;
//  }
//}

import React, { Component } from 'react'; 
import {
      TouchableHighlight,
      View,
      Text
    } from 'react-native';
import { styles } from '../styles';

export default class AboutScreen extends Component { 
  static navigationOptions = {
    title: 'app.json',
  };
	render() {
		return( 
			 <View style={styles.container}>
			    <Text style={styles.titleText} >About Screen</Text>
		   </View> 
		);
	}

}
