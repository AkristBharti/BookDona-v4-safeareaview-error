import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SideBar from './SideBar';
import {AppTabNavigator} from './AppTabNavigator';
import UserSetting from '../screens/UserSetting';
import BookDonateScreen from '../screens/DonateBookScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {screen: AppTabNavigator},
    Settings : {screen: UserSetting},
    BookDonate : {screen:BookDonateScreen}},
{contentComponent:SideBar}
)

