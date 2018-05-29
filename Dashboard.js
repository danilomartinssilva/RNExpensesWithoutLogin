import React, { Component } from 'react';
import {View,Text} from 'react-native';

import {createBottomTabNavigator } from 'react-navigation';
import AddScreen from './screens/AddScreen';
import ListScreen from './screens/ListScreen';
import LoginScreen from './screens/LoginScreen';
import DetailScreen from './screens/DetailScreen';
import Icon from 'react-native-vector-icons/Ionicons';


console.disableYellowBox = true;
 class Dashboard extends Component {

    componentDidMount(){

    }
    render(){

        return (
            <AppStackNavigator/>
            
        )
    }
}


export default createBottomTabNavigator ({
    
    Detail:{
        screen:DetailScreen,
              navigationOptions:{
                tabBarLabel:'Detalhe',
                tabBarIcon:(<Icon name="ios-exit" size={30}  />)             
            }
    },
    Add:{
        screen:AddScreen,
                navigationOptions:{
                tabBarLabel:'Adicionar',
                tabBarIcon: (<Icon name="ios-add" size={30} />)             
                }
    },
    List:{screen:ListScreen,
                navigationOptions:{
                tabBarLabel:'Listar',
                tabBarIcon:(<Icon name="ios-search" size={30} />)             
                }
    }

},{
    initialRouteName:'Add',
    order:['List','Add','Detail'],
    navigationOptions:{
        tabBarVisible:true
    }
})
//export default Dashboard
