import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    //Platform,
    StyleSheet,
    TextInput,    
    Text,
    View,
    Button,
    Alert,
    Image
  } from 'react-native';

  const header = (props) =>(
    <View style={styles.header} >    


    <Icon name="ios-menu" size={40} color="#ffffff" style={styles.iconMenu} />    
      
    <View style = {styles.infoCredentials}>
      <Text style = {styles.textInfoCredentials}>Usuário: Danilo </Text>     
      </View>

    </View>
);

  const styles = StyleSheet.create({
  
    header:{
      height:40,
      backgroundColor:'#c62828',
      flexDirection:"row",

      justifyContent:"space-between"

    },
    iconMenu:{
      marginLeft:10,
      marginTop:1
    },
    infoCredentials:{
      marginTop:10 ,
      marginRight:10
    },
    textInfoCredentials:{
      fontSize:14,
      color:"#ffffff"
    }

    /*placeImage:{
      //margin:,
      height:35,
      width:50, 
      borderRadius:17.5      

    },*/  
  });
    
  export default header
   
    /*
    ,
  
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    */

    //export default Header