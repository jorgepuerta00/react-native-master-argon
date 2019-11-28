import React, { Component } from 'react';
import { View, ScrollView, TouchableHighlight, StyleSheet, Image } from 'react-native';

export default class ThumbnailButton extends Component {
    
    renderThumbnail = (item, index) => {    
        return (
            <TouchableHighlight 
                key={`people-${item.id}`} 
                style={[styles.profileImgContainer, { borderColor: '#ff99ca', borderWidth:3 }]}>
                <Image source={{ uri: item.image }} style={styles.profileImg} />
            </TouchableHighlight>
        );
      };
        
    render() {
        const { data } = this.props;
        return (
            <View style={{ height: 100 }}>
                <View style={{ flex: 3 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', paddingStart: 5, paddingEnd: 5 }}>
                        { data && data.map((item, index) => this.renderThumbnail(item, index) )}
                    </ScrollView>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    profileImgContainer: {
        marginLeft: 8,
        height: 80,
        width: 80,
        borderRadius: 40,
        overflow: 'hidden',
      },
      profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
      },
  });