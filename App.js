import React from 'react';
import { StatusBar, Text, View, ScrollView, BackHandler, TouchableOpacity } from 'react-native';
import {StyledText} from './styledText.js';
import {CalendaryDisplay} from './calendarDisplay.js';
import {styles} from './styles.js';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'main', //main or about
      showDatePicker: false,
    };
    this.setDisplay = this.setDisplay.bind(this);
    this.setNewDate = this.setNewDate.bind(this);
    this.toggleDatePicker = this.toggleDatePicker.bind(this);

    this.today = new Date();
    this.todayString = (new Date().getMonth() + 1 + '-' + new Date().getDate());
  };

  /*backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
    if (this.state.display !== 'main') {
      this.setState({display: 'main'});
      return true;
    } else {
      BackHandler.exitApp();
    };
  });*/

  setDisplay(component) {
    //component should only ever be main or about
    this.setState({
      display: component,
    });
  };

  setNewDate(event, date) {
    //console.log('setNewDate running');
    this.today = date;
    this.todayString = (date.getMonth() + 1 + '-' + date.getDate());
    //console.log((this.today.getMonth() + 1) + '-' + this.today.getDate());
    this.toggleDatePicker();
  };

  toggleDatePicker() {
    this.setState({
      showDatePicker: !this.state.showDatePicker
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.everythingNotFooter}>
          <StatusBar barStyle='light-content'/>
          <TouchableOpacity style={styles.header} onPress={() => this.toggleDatePicker()}>
            <StyledText text={this.today.toDateString()} style={{marginLeft: 'auto', marginRight: 'auto', fontSize: 25, color: 'white'}}/>
          </TouchableOpacity>
          <CalendaryDisplay date={this.today} todayString={this.todayString}/>
        </View>
        <View style={styles.footer}>
          {this.state.display === 'main' && <TouchableOpacity
            onPress={() => this.setDisplay('about')}
            style={styles.bottomButton}
          >
            <StyledText text='About' style={styles.bottomButtonText}/>
          </TouchableOpacity>
          }
          {this.state.display === 'about' && <TouchableOpacity
            onPress={() => this.setDisplay('main')}
            style={styles.bottomButton}
          >
            <StyledText text='Back' style={styles.bottomButtonText}/>
          </TouchableOpacity>
          }
          <TouchableOpacity style={[styles.bottomButton, {marginLeft: 1}]}>
            <StyledText text='Donate' style={styles.bottomButtonText}/>
          </TouchableOpacity>
        </View>
        {this.state.showDatePicker &&
          <DateTimePicker
            testID="dateTimePicker"
            value={this.today}
            mode='date'
            display="default"
            onChange={this.setNewDate}
          />
        }
      </View>
    );
  };
};
