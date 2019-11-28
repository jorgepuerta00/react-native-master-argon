import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Block, Button, theme, Text } from 'galio-framework';
import { Images, argonTheme } from "../constants";

class SocialButtons extends React.Component {
  render() {
    return (
        <Block row style={{ marginTop: theme.SIZES.BASE }}>
            <Button style={{ ...styles.socialButtons, marginRight: 30 }}>
            <Block row>
                <Image style={styles.inputIcon} source={Images.FacebookLogo}/>
                <Text style={styles.socialTextButtons}>FACEBOOK</Text>
            </Block>
            </Button>
            <Button style={styles.socialButtons}>
            <Block row>
                <Image style={styles.inputIcon} source={Images.GoogleLogo}/>
                <Text style={styles.socialTextButtons}>GOOGLE</Text>
            </Block>
            </Button>
        </Block> 
    );
  }
}

const styles = StyleSheet.create({
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'bottom'
  },
  inputIcon:{
    width:20,
    height:20,
    marginRight: 12
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
});

export default SocialButtons;