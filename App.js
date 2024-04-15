import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Blockprovider } from "./context/BlockContext";
import IndexScreen from "./src/screen/IndexScreen";

const navigator = createStackNavigator({
  paiman1: IndexScreen
},{
  initialRouteName:'paiman1',
  defaultNavigationOptions:{
    title:'arif paiman'
  }
});
const AppContainer =  createAppContainer(navigator);

const App = () => {
   return (
     <Blockprovider>
       <AppContainer />
     </Blockprovider>
   );
 };
 export default App;