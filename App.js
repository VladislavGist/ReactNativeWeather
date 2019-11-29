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
  ImageBackground,
  StatusBar,
  TextInput,
} from 'react-native';

import Forecast from './Forecast';

import OpenWeatherMap from './open_weather_map';

class App extends Component {
  state = {
    zip: '',
    forecast: null,
  };

  _handleTextChange = event => {
    let zip = event.nativeEvent.text;

    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      this.setState({forecast});
    });
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
        <ImageBackground
          source={require('./flowers.png')}
          style={styles.backdrop}>
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>Your input: {this.state.zip}</Text>

              <View style={styles.zipContainer}>
                <TextInput
                  style={[styles.zipCode, styles.mainText]}
                  onSubmitEditing={this._handleTextChange}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>

            {content}
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', paddingTop: 30},
  backdrop: {flex: 1, flexDirection: 'column', width: '100%'},
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30,
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
  },
  zipCode: {flex: 1, flexBasis: 1, width: 50, height: baseFontSize},
  mainText: {fontSize: baseFontSize, color: '#FFFFFF'},
});

export default App;
