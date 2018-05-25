import React,{Component} from 'react';
import {Text,View,TextInput,StyleSheet} from 'react-native';
import Add from './Add';
//import List from './List';

const content = () =>(
    <View style={styles.content} >        
        <Add/>                              
    </View>
)


const styles = StyleSheet.create({
  
    content:{
        backgroundColor:"#ffffff",
        flex:1    
    }

    /*placeImage:{
      //margin:,
      height:35,
      width:50, 
      borderRadius:17.5      

    },*/  
  });
    

export default content;