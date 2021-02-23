import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import readStoryScreen from './screens/readStoryScreen';
import writeStoryScreen from './screens/writeStoryScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
}

const tabNavigator = createBottomTabNavigator({
  readStory: {screen: readStoryScreen},
  writeStory: {screen: writeStoryScreen}
},
{
  defaultNavigationOptions: ({navigation}) => {
    tabBarIcon: (() => {
      const routeName = navigation.state.routeName;
      if(routeName === "readStory") {
        return(
          <Image
          source = {require("./assets/read.png")}
          style = {{width: 40, height: 40}}/>
        );
      }
      else if(routeName === "writeStory") {
        return(
          <Image
          source = {require("./assets/write.png")}
          style = {{width: 40, height: 40}}/>
        );
      }
    })
  }
}
);

var AppContainer = createAppContainer(tabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
