/**
 * @format
 */

import { AppRegistry, Text, TextInput } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import {configureReanimatedLogger,ReanimatedLogLevel} from 'react-native-reanimated';

configureReanimatedLogger({
    level:ReanimatedLogLevel,
    strict:false,
})
Text.defaultprops={}
TextInput.defaultprops={}
AppRegistry.registerComponent(appName, () => App);
