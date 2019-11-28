import React from "react";
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, KeyboardAvoidingView } from "react-native";
import { Block, Text, theme, Input } from "galio-framework";

import { Button } from "../../components";

import argonTheme from "../../constants/Theme";
import Images from "../../constants/Images";

// Internationalization
import i18n from '../../i18n';

const { height, width } = Dimensions.get("screen");

class ForgotPassword extends React.Component {
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
            <Block flex space="between" style={styles.padded}>
              <Block flex space="around" style={{ zIndex: 2 }}>
                <Block style={styles.title}>
                  <Block>
                    <Text color="white" size={40}>
                    {i18n.t('forgotpassword.forgotPasswordTitleOne')}
                    </Text>
                  </Block>
                  <Block>
                    <Text color="white" size={40}>
                    {i18n.t('forgotpassword.forgotPasswordTitleTwo')}
                    </Text>
                  </Block>
                  <Block style={styles.subTitle}>
                    <Text color="white" size={16}>
                    {i18n.t('forgotpassword.steps')}
                    </Text>
                  </Block>
                  <Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder={i18n.t('forgotpassword.typeEmail')}
                      />
                    </Block>
                    <Block middle>
                      <Button color="primary" style={styles.createButton} onPress={() => navigation.navigate("ResetPassword")}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        {i18n.t('forgotpassword.sendCode')}
                        </Text>
                      </Button>
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
    width: width * 0.5,
    marginTop: 25
  },
  container: {
    backgroundColor: theme.COLORS.BLACK,
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
  title: {
    marginTop:'-90%'
  },
  subTitle: {
    marginTop: 20
  }
});

export default ForgotPassword;