/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import Forecast from './Forecast';

class App extends Component {
  state = {
    zip: '',
    forecast: null,
  };

  _handleTextChange = event => {
    this.setState({zip: event.nativeEvent.text});
  };

  render() {
    let content = null;

    if (this.state.forecast) {
      const {forecast} = this.state;

      content = (
        <Forecast
          main={forecast.main}
          description={forecast.description}
          temp={forecast.temp}
        />
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Your input {this.state.zip}</Text>
        {content}
        <TextInput
          style={styles.input}
          onSubmitEditing={this._handleTextChange}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {fontSize: 20, textAlign: 'center', margin: 10},
  input: {
    fontSize: 20,
    borderWidth: 2,
    padding: 2,
    height: 40,
    width: 100,
    textAlign: 'center',
  },
});

export default App;
