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
        View,
        Text
        } from 'react-native';
import { styles } from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DashboardScreen extends Component { 
	static navigationOptions = {
    title: 'Dashboard',
    tabBarIcon: ({ tintColor }) => <Icon name='home' color={tintColor} />
  }
	user() {
		const { rootNavigation } = this.props.screenProps; return rootNavigation.state.params.user;
	}
	render() {
		const { name, email } = this.user(); 
		return( 
			<View style={styles.container}>
      	<Text style={styles.titleText} >{`Welcome, ${name} <${email}>,let's get cooking!`}
				</Text>
    	</View>
		);
} }
