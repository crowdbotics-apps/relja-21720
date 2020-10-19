import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial150987Navigator from '../features/Tutorial150987/navigator';
import NotificationList150959Navigator from '../features/NotificationList150959/navigator';
import Settings150958Navigator from '../features/Settings150958/navigator';
import Settings150950Navigator from '../features/Settings150950/navigator';
import UserProfile150948Navigator from '../features/UserProfile150948/navigator';
import UserProfile150669Navigator from '../features/UserProfile150669/navigator';
import Maps150650Navigator from '../features/Maps150650/navigator';
import Settings150628Navigator from '../features/Settings150628/navigator';
import Settings150613Navigator from '../features/Settings150613/navigator';
import NotificationList150612Navigator from '../features/NotificationList150612/navigator';
import Maps150611Navigator from '../features/Maps150611/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial150987: { screen: Tutorial150987Navigator },
NotificationList150959: { screen: NotificationList150959Navigator },
Settings150958: { screen: Settings150958Navigator },
Settings150950: { screen: Settings150950Navigator },
UserProfile150948: { screen: UserProfile150948Navigator },
UserProfile150669: { screen: UserProfile150669Navigator },
Maps150650: { screen: Maps150650Navigator },
Settings150628: { screen: Settings150628Navigator },
Settings150613: { screen: Settings150613Navigator },
NotificationList150612: { screen: NotificationList150612Navigator },
Maps150611: { screen: Maps150611Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
