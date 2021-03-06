//to do: bring up and dismiss keyboard when click on text input in search bar, consider extracting search logic out into 'search bar' component

import React from 'react';
//built in components
import { StatusBar, Keyboard, Text, View, ScrollView, BackHandler, TouchableOpacity, Linking, TextInput } from 'react-native';
//custom components
import {StyledText} from './styledText.js';
import {CalendarDisplay} from './calendarDisplay.js';
import {About} from './aboutComponent.js';
//eventLibrary (big JSON of all events)
import {eventLibrary} from './eventLibrary.js';
//styles
import {styles} from './styles.js';
import DateTimePicker from '@react-native-community/datetimepicker';
//icons
import {AntDesign} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {NotificationTest} from './NotificationTest.js';

//notification stuff (on To Do list, expo's docs are a bit complicated)
//import {Constants, Notifications, Permissions} from 'expo';
//import Constants from 'expo-constants';
//import * as Notifications from 'expo-notifications';
//import * as Permissions from 'expo-permissions';

//the code below checks for amount of empty days and total event count in the calendar
///*
var everyDayString = Object.keys(eventLibrary);
var emptyCount = 0;
var totalEventsCount = 0;
var singleEventCount = 0;
var dayEventsCount;
for (var i = 0; i < everyDayString.length; i++) {
  var day = eventLibrary[everyDayString[i]];
  dayEventsCount = 0;
  //if day has no entries, increment count by one
  if (!day['Revolution'][0].description && !day['Rebellion'][0].description && !day['Labor'][0].description && !day['Birthdays'][0].description && !day['Assassinations'][0].description && !day['Other'][0].description) {
    emptyCount++;
  } else {
    if (day['Revolution'][0].description) {
      totalEventsCount += day['Revolution'].length;
      dayEventsCount += day['Revolution'].length;
    };
    if (day['Rebellion'][0].description) {
      totalEventsCount += day['Rebellion'].length;
      dayEventsCount += day['Rebellion'].length;
    };
    if (day['Labor'][0].description) {
      totalEventsCount += day['Labor'].length;
      dayEventsCount += day['Labor'].length;
    };
    if (day['Birthdays'][0].description) {
      totalEventsCount += day['Birthdays'].length;
      dayEventsCount += day['Birthdays'].length;
    };
    if (day['Assassinations'][0].description) {
      totalEventsCount += day['Assassinations'].length;
      dayEventsCount += day['Assassinations'].length;
    };
    if (day['Other'][0].description) {
      totalEventsCount += day['Other'].length;
      dayEventsCount += day['Other'].length;
    };
    if (dayEventsCount === 1) {
      singleEventCount++;
    }
  };
};
console.log('amount of single event days: ' + singleEventCount);
console.log('amount of events: ' + totalEventsCount);
//*/

//this function checks to see if a given day (or search query formatted as a "day") is not empty:
function isDayNotEmpty(day) {
  //if the eventCategory for the day is empty, its first entry's description prop will be an empty string
  if (day['Revolution'][0].description || day['Rebellion'][0].description || day['Birthdays'][0].description || day['Labor'][0].description || day['Assassinations'][0].description || day['Other'][0].description) {
    return true;
  } else {
    return false;
  };
};

var initTodayString = (new Date().getMonth() + 1 + '-' + new Date().getDate());

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'main', //main, about, or search
      showDatePicker: false,
      showSearchBar: false,
      events: eventLibrary[initTodayString], //events from selected day, to display in CalendarDisplay
      searchValue: '',
      notEmpty: isDayNotEmpty(eventLibrary[initTodayString]),
    };
    this.setDisplay = this.setDisplay.bind(this);
    this.setNewDate = this.setNewDate.bind(this);
    this.toggleDatePicker = this.toggleDatePicker.bind(this);
    this.toggleSearchView = this.toggleSearchView.bind(this);
    this.searchEvents = this.searchEvents.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);

    this.today = new Date();
    this.todayString = initTodayString;
    this.scrollViewRef = React.createRef(); //scrollView ref, used to go to top of scrollview when display component is changed
    this.calendarDisplayRef = React.createRef();
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
        searchValue: 'Search the calendar!',
        notEmpty: isDayNotEmpty(this.state.events),
      });
      return true;
    } else {
      BackHandler.exitApp();
    };
  });

  searchEvents() {
    //iterate over each day, each day's category, each day's category's list of events, see if this.state.searchValue is in the event's description
    //if it is, add that event to the "artificial" day that is created from search results (held as this.searchEventsResult)
    //this day is then passed to calendarDisplay, retaining all the functionality of a calendar day's events

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
        //if iteration is on last day, sort each category events by title, alphabetically
        if (everyDayString[i] === "12-31") {
          this.searchEventsResult[categories[j]].sort(function(a, b) {
            if (a.title > b.title) {
              return 1;
            } else {
              return -1;
            };
          });
        };
      };
    };
    this.setState({
      notEmpty: isDayNotEmpty(this.searchEventsResult)
    });
    this.setDisplay('search');
    //exit out of specific event display:
    this.calendarDisplayRef.current.setDisplay('all');
  };

  //makes the only scrollview go to the top of the list. Without this, specific event views don't default to their beginning
  scrollToTop() {
    this.scrollViewRef.scrollTo({x: 0, y: 0, animated: false});
  };

  trackSearchText(text) {
    this.setState({searchValue: text});
  };

  setDisplay(component) {
    //component should only ever be main, search, or about
    if (component === 'all') {
      this.setState({
        searchValue: '',
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
      notEmpty: isDayNotEmpty(eventLibrary[this.todayString])
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
    this.scrollToTop();
    //console.log((this.today.getMonth() + 1) + '-' + this.today.getDate());
    //this.toggleDatePicker();
  };

  toggleDatePicker() {
    this.setState({
      showDatePicker: !this.state.showDatePicker
    });
  };

  toggleSearchView() {
    this.setState({
      showSearchBar: !this.state.showSearchBar
    });
  };

  render() {
    //two possible views here, 'main' and 'about'
    //console.log(this.state.events);
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        {this.state.display !== 'about' &&
        <View>
        <View style={styles.onThisDay}>
          {!this.state.showSearchBar &&
            <View>
              <StyledText text='On This Day in History' style={{fontSize: 24, textAlign: 'center', color: 'white'}}/>
              <TouchableOpacity
                onPress={() => this.toggleSearchView()}
                style={styles.toggleSearchIconWrapper}
              >
                <AntDesign name="search1" size={28} color="black" style={styles.toggleSearchIcon}/>
              </TouchableOpacity>
            </View>
          }
          {this.state.showSearchBar &&
            <View>
              <StyledText text='Search the Calendar!' style={{fontSize: 24, textAlign: 'center', color: 'white'}}/>
              <TouchableOpacity
                onPress={() => this.toggleSearchView()}
                style={styles.toggleSearchIconWrapper}
              >
                <Feather name="x-square" size={28} color="white"/>
              </TouchableOpacity>
            </View>
          }
        </View>
        {this.state.showSearchBar &&
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
          </View>}
        {!this.state.showSearchBar &&
          <TouchableOpacity style={styles.header} onPress={() => this.toggleDatePicker()}>
            <StyledText text={this.today.toDateString()} style={{marginLeft: 'auto', marginRight: 'auto', fontSize: 24, color: 'white'}}/>
            <AntDesign name='calendar' size={28} color='white' style={{position: 'absolute', right: 12, top: 11}}/>
          </TouchableOpacity>}
        </View>}
        <ScrollView style={styles.everythingNotFooter} ref={(c) => {this.scrollViewRef = c}}>
          <View style={styles.mainContent}>
            {this.state.display === 'main' &&
              <CalendarDisplay
                appDisplay={this.state.display}
                date={this.today}
                events={this.state.events}
                todayString={this.todayString}
                ref={this.calendarDisplayRef}
                scrollToTop={this.scrollToTop}
                notEmpty={this.state.notEmpty}
                search={false}
              />
            }
            {this.state.display === 'about' && <NotificationTest/>}
            {/*this.state.display === 'about' && <About/>*/}
            {this.state.display === 'search' &&
              <CalendarDisplay
                appDisplay={this.state.display}
                date={this.today}
                events={this.searchEventsResult}
                todayString={this.todayString}
                ref={this.calendarDisplayRef}
                scrollToTop={this.scrollToTop}
                notEmpty={this.state.notEmpty}
                search={true}
              />
            }
            {this.state.display === 'donate' && <Donate/>}
          </View>
        </ScrollView>
        <View style={styles.footer}>

          {this.state.display !== 'about' &&
            <TouchableOpacity
              onPress={() => this.setDisplay('about')}
              style={styles.bottomButton}
            >
              <StyledText text='About' style={styles.bottomButtonText}/>
            </TouchableOpacity>
          }

          {this.state.display === 'about' &&
            <TouchableOpacity
              onPress={() => this.setDisplay('main')}
              style={styles.bottomButton}
            >
              <StyledText text='Back' style={styles.bottomButtonText}/>
              </TouchableOpacity>
          }

          <TouchableOpacity
            style={[styles.bottomButton, {marginLeft: 1}]}
            onPress={() => Linking.openURL('https://www.apeoplescalendar.org')}
          >
            <StyledText text='Website' style={styles.bottomButtonText}/>
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
