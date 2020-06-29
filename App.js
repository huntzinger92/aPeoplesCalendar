//to do: bring up and dismiss keyboard when click on text input in search bar, consider extracting search logic out into 'search bar' component

import React from 'react';
//built in components
import { StatusBar, Text, View, ScrollView, BackHandler, TouchableOpacity, Linking, TextInput } from 'react-native';
//custom components
import {StyledText} from './styledText.js';
import {CalendarDisplay} from './calendarDisplay.js';
import {About} from './aboutComponent.js';
import {SearchResults} from './searchResults.js';
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

/*var everyDayString = Object.keys(eventLibrary);
var count = 0;
for (var i = 0; i < everyDayString.length; i++) {
  var day = eventLibrary[everyDayString[i]];
  //if day has no entries, increment count by one
  if (!day['Revolution'][0].description && !day['Rebellion'][0].description && !day['Labor'][0].description && !day['Birthdays'][0].description && !day['Assassinations'][0].description && !day['Other'][0].description) {
    count++;
  };
};
console.log('amount of empty days: ' + count);*/

var initTodayString = (new Date().getMonth() + 1 + '-' + new Date().getDate());

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'main', //main, about, or search
      showDatePicker: false,
      events: eventLibrary[initTodayString], //events from selected day, to display in CalendarDisplay
      showDonationPrompt: false,
      searchValue: 'sankara'
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
    this.searchEventsResult = [];
  };

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
    //iterate over each day, each day's category, each day's category's list of events, see if searchText is in the event's description
    //if it is, append the means of finding it to this.searchEventsResult
    //after that setState display: 'searchResults', which will give a list of TouchableOpacities that link to specific events?
    console.log('searchEvents is running with searchValue as ' + this.state.searchValue);
    //clear out any previous search results
    this.searchEventsResult = [];
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
          if (lowerDescription.includes(this.state.searchValue)) {
            //if the search term is included, add the event to the results class variable
            console.log(day[categories[j]][k].title);
            this.searchEventsResult.push(day[categories[j]][k]);
          };
        };
      };
    };
    this.setDisplay('search');
  };

  trackSearchText(text) {
    var lowerText = text.toLowerCase();
    this.setState({searchValue: lowerText});
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
          <TouchableOpacity onPress={() => this.searchEvents()}>
            <AntDesign name="search1" size={28} color="black" />
          </TouchableOpacity>
          <TextInput
            onChangeText={(text) => this.trackSearchText(text)}
            value={this.state.searchValue}
          />
        </View>
        <ScrollView style={styles.everythingNotFooter}>
          <View style={styles.mainContent}>
            {this.state.display === 'main' && <CalendarDisplay date={this.today} events={this.state.events} todayString={this.todayString} ref={this.calendarDisplayRef}/>}
            {this.state.display === 'about' && <About/>}
            {this.state.display === 'search' && <SearchResults events={this.searchEventsResult}/>}
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
