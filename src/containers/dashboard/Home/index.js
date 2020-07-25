import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

class Home extends Component {
  render() {
    return (
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </SafeAreaView>
    );
  }
}

export default Home;
