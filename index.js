/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

export const POLICE = require('./images/policeman2.jpg')

AppRegistry.registerComponent(appName, () => App);
