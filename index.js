/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/config/routes';
import setup from './src/store';
const store = setup();

Navigation.events().registerAppLaunchedListener(() => {
  registerScreens(store);
});
