import React from 'react';
import { StatusBar, Text, View, ScrollView, BackHandler, TouchableOpacity, Linking } from 'react-native';
import {StyledText} from './styledText.js';
import {CalendarDisplay} from './calendarDisplay.js';
import {About} from './aboutComponent.js';
import {Donate} from './donateComponent.js';
import {eventLibrary} from './eventLibrary.js';
import {styles} from './styles.js';
import DateTimePicker from '@react-native-community/datetimepicker';

var initTodayString = (new Date().getMonth() + 1 + '-' + new Date().getDate());

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'main', //main or about
      showDatePicker: false,
      events: eventLibrary[initTodayString], //events from selected day, to display in CalendarDisplay
    };
    this.setDisplay = this.setDisplay.bind(this);
    this.setNewDate = this.setNewDate.bind(this);
    this.toggleDatePicker = this.toggleDatePicker.bind(this);
    this.handleDonate = this.handleDonate.bind(this);

    this.today = new Date();
    this.todayString = initTodayString;
    this.calendarDisplayRef = React.createRef();
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
    if (date === undefined) {
      //when the user taps out of date menu to close it, the date variable is undefined, which throws an error when navigating
      //in this case, revert back to today's date
      this.today = new Date();
    } else {
      this.today = date;
    };
    this.todayString = (date.getMonth() + 1 + '-' + date.getDate());
    this.setState({
      events: eventLibrary[this.todayString],
      showDatePicker: false,
    });
    //exit out of specific event display:
    this.calendarDisplayRef.current.setDisplay('all');
    //console.log((this.today.getMonth() + 1) + '-' + this.today.getDate());
    //this.toggleDatePicker();
  };

  toggleDatePicker() {
    this.setState({
      showDatePicker: !this.state.showDatePicker
    });
  };

  handleDonate() {
    //this.setState({
      //display: 'donate'
    //});
    //Linking.openUrl('http://www.paypal.com');
  };

  render() {
    //two possible views here, 'main' and 'about'
    //console.log(this.state.events);
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <TouchableOpacity style={styles.header} onPress={() => this.toggleDatePicker()}>
          <StyledText text={this.today.toDateString()} style={{marginLeft: 'auto', marginRight: 'auto', fontSize: 25, color: 'white'}}/>
        </TouchableOpacity>
        <ScrollView style={styles.everythingNotFooter}>
          <View style={styles.mainContent}>
            {this.state.display === 'main' && <CalendarDisplay date={this.today} events={this.state.events} todayString={this.todayString} ref={this.calendarDisplayRef}/>}
            {this.state.display === 'about' && <About/>}
            {this.state.display === 'donate' && <Donate/>}
          </View>
        </ScrollView>
        <View style={styles.footer}>
          {this.state.display === 'main' && <TouchableOpacity
            onPress={() => this.setDisplay('about')}
            style={styles.bottomButton}
          >
            <StyledText text='About' style={styles.bottomButtonText}/>
          </TouchableOpacity>
          }
          {this.state.display !== 'main' && <TouchableOpacity
            onPress={() => this.setDisplay('main')}
            style={styles.bottomButton}
          >
            <StyledText text='Back' style={styles.bottomButtonText}/>
          </TouchableOpacity>
          }
          <TouchableOpacity
            style={[styles.bottomButton, {marginLeft: 1}]}
            onPress={() => Linking.openURL('https://www.patreon.com/apeoplescalendar?fan_landing=true')}
          >
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
