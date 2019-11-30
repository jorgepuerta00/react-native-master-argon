import React from "react";
import { KeyboardAvoidingView, ImageBackground, Image, StyleSheet, StatusBar, Dimensions } from "react-native";
import { Block, Text, theme, Input } from "galio-framework";

import { Button } from "../../components";
import { Images, argonTheme } from "../../constants";

import SocialButtons from '../../components/SocialButtons';

// Internationalization
import i18n from '../../i18n';

const { height, width } = Dimensions.get("screen");

class Login extends React.Component {

  goToScreen = nameScreen => {
    this.props.navigation.navigate(nameScreen)        
  };

  render() {
    const { navigation } = this.props;
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground source={Images.RegisterBackground} style={{ width, height, zIndex: 1 }} >
          <Block flex middle>
            <Block center>
              <Image source={Images.LogoOnboarding} style={styles.logo} />          
            </Block>
            <Block style={styles.registerContainer}>
              <Block flex={0.4} middle>
                <Text style={styles.textSignIn}>
                  {i18n.t('login.signInTitle')}
                </Text>
                <SocialButtons/>
              </Block>
              <Block flex>
                <Block flex={0.17} middle>
                  <Text style={styles.textSignIn}>
                  {i18n.t('login.signInSubtitle')}
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder={i18n.t('login.email')}
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder={i18n.t('login.password')}
                      />
                    </Block>
                    <Block middle>
                      <Button color="primary" style={styles.createButton} onPress={() => navigation.navigate("Profile")}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        {i18n.t('login.login')}
                        </Text>
                      </Button>
                    </Block>
                    <Block style={styles.containerSignUp}>
                      <Text style={styles.text} onPress={() => navigation.navigate("Register")}>
                        {i18n.t('login.createAccount')}
                      </Text>
                      <Text style={styles.text} onPress={() => navigation.navigate("ForgotPassword")}>
                        {i18n.t('login.forgotPassword')}
                      </Text>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}


const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-20%'
  },
  containerSignUp: {  
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: "white",
    fontSize: 14
  },
  textSignIn: {
    backgroundColor: 'transparent',
    color:"white",
    fontSize: 12,
  },
  inputIcon:{
    width:20,
    height:20,
    marginRight: 12
  },
  registerContainer: {
    width: width * 0.9,
    height: height * 0.6,
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default Login;