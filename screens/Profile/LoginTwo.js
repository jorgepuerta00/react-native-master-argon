import React from "react";
import { KeyboardAvoidingView, ImageBackground, Image, StyleSheet, StatusBar, Dimensions } from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../../components";
import { Images, argonTheme } from "../../constants";

import SocialButtons from '../../components/SocialButtons';

const { height, width } = Dimensions.get("screen");

class LoginTwo extends React.Component {

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
            <ImageBackground source={Images.RegisterBackground} style={{ height, width, zIndex: 1 }} />
          </Block>
          <Block center>
            <Image source={Images.LogoOnboarding} style={styles.logo} />          
          </Block>        
          <Block flex middle space="between" style={styles.padded}>
            <Block flex={0.25} middle >
              <Text style={styles.textSignIn} middle>
                Sign in with
              </Text>
              <SocialButtons/>
            </Block>            
            <Block flex={0.25} middle>
              <Text style={styles.textSignIn}>
                Or sign in the classic way
              </Text>
              <Block flex>
                <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                  <Input
                    borderless
                    placeholder="Email"
                    iconContent={
                      <Icon
                        size={16}
                        color={argonTheme.COLORS.ICON}
                        name="ic_mail_24px"
                        family="ArgonExtra"
                        style={styles.inputIcons}
                      />
                    }
                  />   
                </Block>
                <Block width={width * 0.8} style={{ marginBottom: 15 }}>                
                  <Input
                    password
                    borderless
                    placeholder="Password"
                    iconContent={
                      <Icon
                        size={16}
                        color={argonTheme.COLORS.ICON}
                        name="padlock-unlocked"
                        family="ArgonExtra"
                        style={styles.inputIcons}
                      />
                    }
                  />
                </Block>                                
                <Block width={width * 0.8} style={{ marginBottom: 15 }}>                  
                  <Block middle>
                    <Button color="primary" style={styles.createButton} onPress={() => navigation.navigate("Profile")}>
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        LOGIN
                      </Text>
                    </Button>                  
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
              </Block>
            </Block>                                  
          </Block>                        
        </Block>     
      </KeyboardAvoidingView> 
    );
  }
}

const styles = StyleSheet.create({  
createButton: {    
  marginBottom: 20,
  width: width * 0.5,
  height: theme.SIZES.BASE * 3,
  shadowRadius: 0,
  shadowOpacity: 0
},
inputIcons: {
  marginRight: 12
},
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
  marginTop: '-80%'
},
containerSignUp: {  
  flexDirection: 'row',
  justifyContent: 'space-around',
},
textSignIn: {
  color: 'white',
  backgroundColor: 'transparent',
  marginTop: '-80%'
},
text: {
  color: 'white',
  backgroundColor: 'transparent',
},
});

export default LoginTwo;