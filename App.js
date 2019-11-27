import React from 'react';
import { Image } from 'react-native';

import { Asset } from 'expo-asset';
import SplashScreen from './screens/Onboarding/Onboarding' 

import { Block, GalioProvider } from 'galio-framework';

import { Images, articles, argonTheme } from './constants';

import Screens from './navigation/MainTabNavigator';

// cache app images
const assetImages = [
  Images.Onboarding,
  Images.LogoOnboarding,
  Images.Logo,
  Images.Pro,
  Images.ArgonLogo,
  Images.iOSLogo,
  Images.androidLogo
];

// cache product images
articles.map(article => assetImages.push(article.image));

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {  
  constructor(props) {
    super(props);
  
    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
  
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
  
  render() {
    if(this.state.isLoading) {
      return <SplashScreen />;
    } else {
      return (
        <GalioProvider theme={argonTheme}>
          <Block flex>            
              <Screens />
          </Block>          
        </GalioProvider>   
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      ...cacheImages(assetImages),
    ]);
  };
  
  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error 
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}