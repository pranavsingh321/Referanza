//import React from 'react';
//import { ExpoConfigView } from '@expo/samples';
//
//export default class SettingsScreen extends React.Component {
//  static navigationOptions = {
//    title: 'app.json',
//  };
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
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles';

export default class ProfileScreen extends Component {
	static navigationOptions = {
        title: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name='user' color={tintColor} />
  }
	logout=()=>{
		const { rootNavigation } = this.props.screenProps;
		rootNavigation.goBack()
	}
	render() {
		return( 
			<View style={styles.container}>
				<Text style={styles.titleText} >Profile Screen</Text> 
				<TouchableHighlight style={styles.primaryButton} onPress={this.logout}>
        	<Text style={styles.primaryButtonText}>Log Out</Text>
        </TouchableHighlight>
			</View> 
		);
	}
}
