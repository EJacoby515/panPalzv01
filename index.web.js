import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('panPalz', () => App);
AppRegistry.runApplication('panPalz', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});