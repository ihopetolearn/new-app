import { createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import IndexScreen from "./src/screen/IndexScreen";

const navigator = createStackNavigator({
  paiman1:IndexScreen
},
{initialRouteName:'paiman1', 
defaultNavigationOptions:{
  title:'business search'}
});
export default createAppContainer(navigator);