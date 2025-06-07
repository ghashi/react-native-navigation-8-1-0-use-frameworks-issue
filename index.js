/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from "./App";
console.log("Hello World 🤔");

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'com.myApp.WelcomeScreen'
             }
           }
         ]
       }
     }
  });
});
