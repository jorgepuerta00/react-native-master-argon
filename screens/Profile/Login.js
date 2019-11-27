import React from "react";
import { KeyboardAvoidingView, ImageBackground, Image, TextInput, StyleSheet, StatusBar, Dimensions, TouchableHighlight } from "react-native";
import { Block, Text, theme } from "galio-framework";

import SocialButtons from '../../components/SocialButtons';

import argonTheme from "../../constants/Theme";
import Images from "../../constants/Images";

const { height, width } = Dimensions.get("screen");

class Login extends React.Component {

  goToScreen = nameScreen => {
    this.props.navigation.navigate(nameScreen)        
  };

  render() {
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Block flex style={styles.container}>
          <StatusBar hidden />
          <Block flex center>
          <ImageBackground
              source={Images.Onboarding}
              style={{ height, width, zIndex: 1 }}
            />
          </Block>
          <Block center>
            <Image source={Images.LogoOnboarding} style={styles.logo} />          
          </Block>        
          <Block flex space="between" style={styles.padded}>
              <Block flex space="around" style={{ zIndex: 2 }}>
                <Block style={styles.loginContainer}>
                  <Block style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.username}/>
                    <TextInput style={styles.inputs}
                      placeholder="Username"
                      keyboardType="email-address"
                      underlineColorAndroid='transparent'
                      onChangeText={(email) => this.setState({email})}/>
                  </Block>
                  <Block style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.password}/>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({password})}/>
                  </Block>
                </Block>                
                <Block center>
                  <TouchableHighlight 
                    style={[styles.buttonContainer, styles.loginButton]} 
                    onPress={() => navigation.navigate("Profile")}>
                    <Text style={styles.loginText}
                      >LOGIN
                    </Text>
                  </TouchableHighlight>
                </Block>
                <Block style={styles.containerSignUp}>
                  <Text style={styles.text} onPress={() => navigation.navigate("Register")}>
                      Create Account
                  </Text>
                  <Text style={styles.text} onPress={() => navigation.navigate("ForgotPassword")}>
                      Forgot Password?
                  </Text>
                </Block>
            </Block>          
            <Block flex style={styles.container}>
              <SocialButtons/>
            </Block>
          </Block>                        
        </Block>     
      </KeyboardAvoidingView> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,    
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center',
    tintColor: 'rgba(0,0,0,0.2)',
  },
  loginContainer: {        
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {    
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius:30,    
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  buttonContainer: {  
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,  
    borderRadius:30,
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
  },
  loginButton: {
    backgroundColor: argonTheme.COLORS.SECONDARY
  },
  loginText: {
    color: argonTheme.COLORS.BLACK,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});

export default Login;