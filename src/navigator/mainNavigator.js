import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
