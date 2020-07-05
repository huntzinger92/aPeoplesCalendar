//to do: bring up and dismiss keyboard when click on text input in search bar, consider extracting search logic out into 'search bar' component

import React from 'react';
//built in components
import { StatusBar, Keyboard, Text, View, ScrollView, BackHandler, TouchableOpacity, Linking, TextInput } from 'react-native';
//custom components
import {StyledText} from './styledText.js';
import {CalendarDisplay} from './calendarDisplay.js';
import {About} from './aboutComponent.js';
//donateComponent.js is not used, but keeping it here in case I decide to build a donate view
import {Donate} from './donateComponent.js';
//eventLibrary (big JSON of all events)
import {eventLibrary} from './eventLibrary.js';
//styles
import {styles} from './styles.js';
import DateTimePicker from '@react-native-community/datetimepicker';
//donation prompt alert:
import AwesomeAlert from 'react-native-awesome-alerts';
//local storage of display settings (currently only used to handle when donation prompt displays, but will include notification scheduling eventually)
import AsyncStorage from '@react-native-community/async-storage';
//icons
import { AntDesign } from '@expo/vector-icons';

//notification stuff (on To Do list, expo's docs are a bit complicated)
//import {Constants, Notifications, Permissions} from 'expo';
//import Constants from 'expo-constants';
//import * as Notifications from 'expo-notifications';
//import * as Permissions from 'expo-permissions';

/*
var everyDayString = Object.keys(eventLibrary);
var count = 0;
for (var i = 0; i < everyDayString.length; i++) {
  var day = eventLibrary[everyDayString[i]];
  //if day has no entries, increment count by one
  if (!day['Revolution'][0].description && !day['Rebellion'][0].description && !day['Labor'][0].description && !day['Birthdays'][0].description && !day['Assassinations'][0].description && !day['Other'][0].description) {
    count++;
  };
};
console.log('amount of empty days: ' + count);
*/

var initTodayString = (new Date().getMonth() + 1 + '-' + new Date().getDate());

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'main', //main, about, or search
      showDatePicker: false,
      events: eventLibrary[initTodayString], //events from selected day, to display in CalendarDisplay
      showDonationPrompt: false,
      searchValue: 'Search the calendar!'
    };
    this.setDisplay = this.setDisplay.bind(this);
    this.setNewDate = this.setNewDate.bind(this);
    this.toggleDatePicker = this.toggleDatePicker.bind(this);
    this.declineDonation = this.declineDonation.bind(this);
    this.acceptDonation = this.acceptDonation.bind(this);
    this.searchEvents = this.searchEvents.bind(this);

    this.today = new Date();
    this.todayString = initTodayString;
    this.calendarDisplayRef = React.createRef();
    this.donationMessage = "A calendar full of working class movements should be free of ads trying to commodify every second of your life.\n\nDonating a bit helps me keep this calendar growing and up to date."
    //searchEventsResult is used as a "artificial" day, passed to calendarDisplay. This allows search results to retain the same look and functionality of any calendar day
    this.searchEventsResult = {
      'Revolution': [{description: ''}],
      'Rebellion': [{description: ''}],
      'Labor': [{description: ''}],
      'Birthdays': [{description: ''}],
      'Assassinations': [{description: ''}],
      'Other': [{description: ''}],
    };
  };

  backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
    if (this.state.display !== 'main') {
      this.setState({
        display: 'main',
        searchValue: 'Search the calendar!'
      });
      return true;
    } else {
      BackHandler.exitApp();
    };
  });


  async componentDidMount() {
    //causes a re-render on Fridays, but probably better than a ternary operator in the initial setting of state
    if (this.today.getDay() === 5) {
      let hasSeenDonation = await AsyncStorage.getItem('@hasSeenDonation');
      if (hasSeenDonation === false) {
        this.setState({
          showDonationPrompt: true,
        });
        try {
          await AsyncStorage.setItem('@hasSeenDonation', "true")
        } catch (e) {

        };
      };
    } else {
      try {
        await AsyncStorage.setItem('@hasSeenDonation', "false")
      } catch (e) {

      };
    };
  };

  searchEvents() {
    //iterate over each day, each day's category, each day's category's list of events, see if this.state.searchValue is in the event's description
    //if it is, add that event to the "artificial" day that is created from search results (held as this.searchEventsResult)
    //this day is then passed to calendarDisplay, retaining all the funcitonality of a calendar day's events

    //dismiss Keyboard
    Keyboard.dismiss();
    if (this.state.searchValue.length < 3) {
      alert('Search value must be three characters or longer!');
      return '';
    };
    //clear out any previous search results
    this.searchEventsResult = {
      'Revolution': [{description: ''}],
      'Rebellion': [{description: ''}],
      'Labor': [{description: ''}],
      'Birthdays': [{description: ''}],
      'Assassinations': [{description: ''}],
      'Other': [{description: ''}],
    };
    //create lowerCase searchValue string
    var lowerSearchValue = this.state.searchValue.toLowerCase();
    //create a list of every day in a year (used as a key in eventLibrary)
    var everyDayString = Object.keys(eventLibrary);
    //create a list of categories
    var categories = ['Revolution', 'Rebellion', 'Labor', 'Birthdays', 'Assassinations', 'Other'];
    //iterate through each day
    for (var i = 0; i < everyDayString.length; i++) {
      var day = eventLibrary[everyDayString[i]];
      //if day has no entries, increment count by one
      for (var j = 0; j < categories.length; j++) {
        for (var k = 0; k < day[categories[j]].length; k++) {
          //finally, we arrive at a specific event object - check to see if searchText in event's description prop
          var lowerDescription = day[categories[j]][k].description.toLowerCase();
          if (lowerDescription.includes(lowerSearchValue)) {
            //if the search term is included, add the event to the results class variable
            //this.searchEventsResult.push(day[categories[j]][k]);
            //if the list of events under the given category is just a placeholder (i.e., description: ''), then overwrite it; else, append to end of list
            if (!this.searchEventsResult[categories[j]][0].description) {
              this.searchEventsResult[categories[j]][0] = day[categories[j]][k];
            } else {
              this.searchEventsResult[categories[j]].push(day[categories[j]][k]);
            };
          };
        };
      };
    };
    this.setDisplay('search');
    //exit out of specific event display:
    this.calendarDisplayRef.current.setDisplay('all');
  };

  trackSearchText(text) {
    this.setState({searchValue: text});
  };

  setDisplay(component) {
    //component should only ever be main, search, or about
    if (component === 'all') {
      this.setState({
        searchValue: ''
      });
    };
    this.setState({
      display: component,
    });
  };

  setNewDate(event, date) {
    //console.log('setNewDate running');
    //console.log(event);
    //console.log(date);
    if (date === undefined || event["type"] === 'dismissed') {
      //when the user taps out of date menu to close it, the date variable is undefined, which throws an error when navigating
      //in this case, hide the calendar and don't do any date logic
      this.setState({showDatePicker: false});
      return '';
      //this.today = new Date();
    } else {
      this.today = date;
    };
    this.todayString = (date.getMonth() + 1 + '-' + date.getDate());
    this.setState({
      events: eventLibrary[this.todayString],
      showDatePicker: false,
    });
    //if coming from a search or about, need to reset the app display:
    if (this.state.display !== 'main') {
      this.setState({
        display: 'main',
        searchValue: 'Search the calendar!'
      });
    };
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

  acceptDonation() {
    this.setState({
      showDonationPrompt: false,
    });
    Linking.openURL('https://www.patreon.com/apeoplescalendar');
  };

  declineDonation() {
    this.setState({
      showDonationPrompt: false,
    });
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
        <View style={styles.searchBar}>
          <TouchableOpacity
            onPress={() => this.searchEvents()}
            style={styles.iconContainer}
          >
            <AntDesign name="search1" size={28} color="black" style={styles.iconSearch}/>
          </TouchableOpacity>
          <TextInput
            style={[styles.searchField, this.state.searchValue === 'Search the calendar!' ? {color: 'grey'} : {color: 'black'}]}
            onChangeText={(text) => this.trackSearchText(text)}
            value={this.state.searchValue}
            maxLength={40}
            onSubmitEditing={() => this.searchEvents()}
            onFocus= {() => this.setState({searchValue : ''})}
          />
        </View>
        <ScrollView style={styles.everythingNotFooter}>
          <View style={styles.mainContent}>
            {this.state.display === 'main' && <CalendarDisplay appDisplay={this.state.display} date={this.today} events={this.state.events} todayString={this.todayString} ref={this.calendarDisplayRef}/>}
            {this.state.display === 'about' && <About/>}
            {this.state.display === 'search' && <CalendarDisplay appDisplay={this.state.display} date={this.today} events={this.searchEventsResult} todayString={this.todayString} ref={this.calendarDisplayRef}/>}
            {this.state.display === 'donate' && <Donate/>}
          </View>
        </ScrollView>
        <View style={styles.footer}>

          {this.state.display !== 'about' && <TouchableOpacity
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
        {this.state.showDonationPrompt &&
          <AwesomeAlert
          show={this.state.showDonationPrompt}
          contentContainerStyle={{borderRadius: 5, elevation: 5, borderWidth: 1, backgroundColor: '#f0f0f0'}}
          title="Help keep this app capitalist free!"
          titleStyle={{fontSize: 22, fontWeight: 'bold', textAlign: 'center'}}
          message={this.donationMessage}
          messageStyle={{fontSize: 18,}}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={true}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Decline"
          confirmText="Donate!"
          confirmButtonColor="#6fdb65"
          confirmButtonTextStyle={{fontSize: 20}}
          confirmButtonStyle={{borderRadius: 5}}
          cancelButtonColor="#cfcfcf"
          cancelButtonTextStyle={{fontSize: 20}}
          cancelButtonStyle={{borderRadius: 5}}
          onCancelPressed={() => {
            this.declineDonation();
          }}
          onConfirmPressed={() => {
            this.acceptDonation();
          }}
        />
        }
      </View>
    );
  };
};
