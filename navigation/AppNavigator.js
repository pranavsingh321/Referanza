import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import GuestNavigator from './GuestNavigator';
//import UserNavigator from './UserNavigator';

//export default createSwitchNavigator({
//  // You could add another route here for authentication.
//  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//  Guest: GuestNavigator,
//  User: UserNavigator,
//});

export default createAppContainer(createSwitchNavigator(
  {
  	Guest: GuestNavigator,
  	Guest: GuestNavigator
  },
));

 // {
  //  initialRouteName: 'Guest'
  //}

