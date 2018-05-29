import React, { Component } from 'react';
import { Text, View, TextInput,StyleSheet, Platform, 
    Button,  ActivityIndicator, TouchableOpacity } from 'react-native';
    import { googleProvider } from '../util/firebase';
    import { auth } from '../util/firebase';
    import { Actions } from 'react-native-router-flux';



//import { ListItem } from 'react-native-elements';

//import _ from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';

import App from '../App';


//import { today } from '../util/today';

export default class Login extends Component{    
    state={
        email:'',
        senha:'',        
    }
    constructor(props){
        super(props);

    }

    render(){

        return (
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <Text style={styles.txHeader}>Sign in</Text>
                    <Text style={styles.txHeader}>Sign up</Text>
                </View>
                <View style = {styles.main}>
                    <View style={styles.form}>
                    <TextInput
                    underlineColorAndroid="transparent"  
                    placeholder = "Email"
                    onChangeText = {(email)=>this.setState({email})}                                          

                    style={styles.txInput}
                    />
                    <TextInput
                    underlineColorAndroid="transparent"  
                    onChangeText = {(senha)=>this.setState({senha})} 
                    placeholder = "Senha" 
                    style={styles.txInput}
                    secureTextEntry={true}
                    />
                    </View> 
                    <View style={styles.viewButtons}>

                    <TouchableOpacity>
                        <Icon.Button name="ios-log-in" backgroundColor="#1B5E20">
                            <Text style={{fontFamily: 'Arial', fontSize: 15,color:'#ffffff',width:90,textAlign:'center'}}>Sign In</Text>
                        </Icon.Button>                                    
                    </TouchableOpacity>

                    <TouchableOpacity>                                            
                    <Icon.Button onPress={()=>this._loginWithGoogle()} name="logo-google" backgroundColor="#f44336">

                         <Text style={{fontFamily: 'Arial', fontSize: 15,color:'#ffffff'}}>Login Google</Text>

                    </Icon.Button>
                    </TouchableOpacity>
                  
                    
                    
                    </View>                
                
                </View>
                <View style = {styles.footer}>
                
                </View>
            </View>
        )

    }
     _loginWithGoogle = () =>{
         const {email,senha} = this.state;

         /*
            auth.signInWithPopup(googleProvider).then(function(result){
                console.log(result);
            })
            */
              //  console.log(email,senha);
            auth.signInWithEmailAndPassword(email, senha).catch(function(error) {                                    

                    
              });
              
             
     }


}

const styles = StyleSheet.create({
container :{
    flex:1,
    backgroundColor:"#283593",
    flexDirection:'column'
},
txInput:{

    height:40,
    borderColor:'gray',
    borderWidth:1,
    borderRadius:8,
    //height:40,
    margin:10,
    
},
txHeader:{
    fontSize:30,
    fontFamily:'Cochin',
    
    //paddingBottom:2


},
form:{
    flex:2,    
    flexDirection:'column',
    justifyContent:'space-around',
},
viewButtons:{
    flexDirection:'column',
    justifyContent:'space-around',
    flex:3,    
    alignItems:'center'
},
main:{
    flex:3,
    flexDirection:'column',
    backgroundColor:"#ffffff",
},

footer:{
    flex:1,
    backgroundColor:"#F5F5F5",
},
header:{
    flex:2,
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor:"#F5F5F5",
    alignItems:'flex-end',
    paddingBottom:4   
}


})


