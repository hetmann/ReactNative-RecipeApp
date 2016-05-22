/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableHighlight
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import AppStyles from './App/styles/App';
import ItemStyles from './App/styles/Item';

const IMAGE = 'https://raw.githubusercontent.com/hetmann/ReactNative-RecipeApp/master/juice.png';

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: 100,
      back: false,
      share: false,
      favorite: false,
      menu: false
    }
  }

  handleBack() {
    this.setState({
      back: !this.state.back
    });
  }

  handleShare() {
    this.setState({
      share: !this.state.share
    });
  }

  handleFavorite() {
    this.setState({
      favorite: !this.state.favorite
    });
  }

  handleMenu() {
    this.setState({
      menu: !this.state.menu
    });
  }

  renderHeader() {
    const { back, share, favorite, menu } = this.state;

    const backIcon = (
      <TouchableHighlight underlayColor={'#FFFFFF'} onPress={this.handleBack.bind(this)}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <MaterialIcons name='keyboard-backspace' size={24} color={back ? '#000000' : '#D2D4D0'} />
          <Text style={{color: '#D2D4D0', fontSize: 18, lineHeight: 22, paddingLeft: 10, fontWeight: '400'}}>Smoothies</Text>
        </View>
      </TouchableHighlight>
    );

    const shareIcon = (
      <TouchableHighlight underlayColor={'#FFFFFF'} onPress={this.handleShare.bind(this)}>          
        <MaterialIcons name='share' size={24} color={share ? '#000000' : '#D2D4D0'} style={{paddingLeft: 15}} />
      </TouchableHighlight>
    );

    let favoriteIcon = (
      <TouchableHighlight underlayColor={'#FFFFFF'} onPress={this.handleFavorite.bind(this)}>            
        <MaterialIcons name={favorite ? 'favorite' : 'favorite-border'} size={24} color={favorite ? '#000000' : '#D2D4D0'} style={{paddingLeft: 15}} />
      </TouchableHighlight>
    );

    const menuIcon = (
      <TouchableHighlight underlayColor={'#FFFFFF'} onPress={this.handleMenu.bind(this)}>            
        <MaterialIcons name='menu' size={24} color={menu ? '#000000' : '#D2D4D0'} style={{paddingLeft: 15}} />
      </TouchableHighlight>
    );

    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        {backIcon}

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
          {shareIcon}{favoriteIcon}{menuIcon}
        </View>
      </View>
    );
  }

  renderImage() {
    return (
      <View style={{alignItems: 'center', paddingTop: 50, flex: 1}}>
        <Image
          style={{height: 300, width: 300}}
          source={{uri: IMAGE}}
        />
      </View>
    );
  }

  renderContent() {
    return (
      <View style={{alignItems: 'center', paddingTop: 20, flex: 1}}>
        <Text style={{color: 'black', fontSize: 24, lineHeight: 28}}>Kale and Apple Smoothie</Text>
        <Text style={{color: '#D2D4D0', fontSize: 18, lineHeight: 28}}>By Cathy Lambert</Text>
      </View>
    );
  }

  renderRating() {
    return (
      <View style={{alignItems: 'center', paddingTop: 20, paddingBottom: 20, flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <MaterialIcons name='star' size={24} color='black' style={{paddingRight: 5, paddingTop: 10 , paddingBottom: 10 }} />
          <MaterialIcons name='star' size={24} color='black' style={{paddingRight: 5, paddingTop: 10 , paddingBottom: 10 }} />
          <MaterialIcons name='star' size={24} color='black' style={{paddingRight: 5, paddingTop: 10 , paddingBottom: 10 }} />
          <MaterialIcons name='star' size={24} color='black' style={{paddingRight: 5, paddingTop: 10 , paddingBottom: 10 }} />
          <MaterialIcons name='star' size={24} color='black' style={{paddingRight: 5, paddingTop: 10 , paddingBottom: 10 }} />
        </View>
      </View>
    );
  }

  renderInfo() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10, paddingBottom: 20, flex: 1}}>
        <View style={{flex: 0.7, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
          <MaterialIcons name='access-time' size={24} color='#D2D4D0' />
          <View style={{paddingRight: 10, borderRightWidth: 1, borderRightColor: '#D2D4D0'}}>
            <Text style={{color: '#D2D4D0', paddingLeft: 10}}>12 MIN</Text>
          </View>
        </View>
        <View style={{flex: 1, paddingLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
          <MaterialIcons name='bubble-chart' size={24} color='#D2D4D0' />
          <Text style={{color: '#D2D4D0', paddingLeft: 10}}>6 INGREDIENTS</Text>
        </View>
      </View>
    );
  }

  renderFooter() {
    return (
      <View style={{alignSelf: 'center', flex: 1, padding: 10}}>
        <TouchableHighlight underlayColor={'#FFFFFF'} onPress={() => {}}>            
          <Text style={{color: 'black', fontSize: 18, lineHeight: 32, fontFamily: 'Kailasa'}}>VIEW RECIPE</Text>
        </TouchableHighlight>
      </View>
    );
  }


  renderCircle() {
    return (
      <AnimatedCircularProgress
        size={150}
        width={5}
        fill={2}
        prefill={10}
        tintColor='#00e0ff'
        backgroundColor='#3d5875' />
    );
  }

  render() {
    return (
      <View>
        <StatusBar
           backgroundColor="blue"
           barStyle="light-content"
         />
        <View style={styles.container}>
          {this.renderHeader()}
          {this.renderImage()}
          {this.renderContent()}
          {this.renderRating()}
          {this.renderInfo()}
          {this.renderFooter()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create();

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
