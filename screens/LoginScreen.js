import React, {Component} from 'react';
import {Text,View,Button} from 'react-native';
import {createStackNavigator } from 'react-navigation';

export default class LoginScreen extends Component{
    render(){
        return(
            <View>
            <Text>========Login ============</Text>
            <Button title = "Go To Detail Screen"
            onPress = {() =>this.props.navigation.navigate('Detail')}
            
            />
            </View>
        );
    }
}