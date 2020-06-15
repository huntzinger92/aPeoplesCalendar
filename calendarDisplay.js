import React from 'react';
import { Text, View, ScrollView, BackHandler, TouchableOpacity } from 'react-native';
import {StyledText} from './styledText.js';
import {styles} from './styles.js';
//uncomment eventLibrary import once you get up and running
import {eventLibrary} from './eventLibrary.js';
import {SpecificEvent} from './specificEvent.js';
import { Ionicons } from '@expo/vector-icons';

//three views possible set by display prop in state: 'all', some type ('Revolution', 'Rebellion', etc.), and 'specific'. Respectively, all events for the day, events only of
//a specific type, or a specific event (includes detail)

//create a dummy calendar for every day of the year:
/*var eventLibrary = {};

var sampleDay = {
'Revolution': [
  {
    category: 'Revolution',
    date: 'January 1st, 1899',
    title: 'The Revolution of January 1st',
    imgSrc: require('./assets/LeninRev.jpg'),
    description: 'A bunch of awful shit happened. Then, it got better before getting worse again.',
    link: 'link will go here',
    infoSrc: 'description source goes here'
  },
  {
    category: 'Revolution',
    date: 'January 1st, 1951',
    title: 'The Second Revolution of January 1st',
    imgSrc: require('./assets/indigenousResistance.jpg'),
    description: 'Tired of the awful shit from the first one, the people rose up and promptly re-created the conditions of the 1st Revolution - first improving, before declining once again into misery.',
    link: 'link will go here',
    infoSrc: 'description source goes here'
  },
],
'Rebellion': [
  {
    category: 'Rebellion',
    date: 'January 1st, 1898',
    title: 'The Rebellion of January 1st',
    imgSrc: require('./assets/LeninRev.jpg'),
    description: "Things were awful, so people rebelled. It didn't work, so they tried again next year.",
    link: 'link will go here',
    infoSrc: 'description source goes here'
  },
],
'Labor': [
  {
    category: 'Labor',
    date: 'January 1st, 1898',
    title: 'The Labor Laws of January 1st',
    imgSrc: require('./assets/indigenousResistance.jpg'),
    description: "Things were awful, so the government passed Labor laws. It kept people's anger just below the revolutionary threshhold.",
    link: 'link will go here',
    infoSrc: 'description source goes here'
  },
],
'Birthdays': [
  {
    category: 'Birthdays',
    date: 'January 1st, 1992',
    title: 'Someone Nice',
    imgSrc: require('./assets/indigenousResistance.jpg'),
    description: "Someone Nice was born on this day in 1992. Here's a quote by him.",
    link: 'link will go here',
    infoSrc: 'description source goes here'
  },
  {
    category: 'Birthdays',
    date: 'January 1st, 1991',
    title: 'Someone Mean',
    imgSrc: require('./assets/LeninRev.jpg'),
    description: "Someone Mean was born on this day in 1992. Here's a quote by her.",
    link: 'link will go here',
    infoSrc: 'description source goes here'
  },
],
'Assassinations': [
  {
    category: 'Assassinations',
    date: 'January 1st, 1898',
    title: 'The Assassination of January 1st',
    imgSrc: require('./assets/Makhno.jpg'),
    description: "Things were awful, so people assassinated the guy in charge. They managed to kill him, but it didn't make anything better.",
    link: 'link will go here',
    infoSrc: 'description source goes here'
  },
],
'Other': [

],
};

//January
for (var i = 1; i < 32; i++) {
  eventLibrary['1-' + i] = sampleDay;
};

//february
for (var i = 1; i < 30; i++) {
  eventLibrary['2-' + i] = sampleDay;
};

//march
for (var i = 1; i < 31; i++) {
  eventLibrary['3-' + i] = sampleDay;
};

//april
for (var i = 1; i < 32; i++) {
  eventLibrary['4-' + i] = sampleDay;
};

//may
for (var i = 1; i < 31; i++) {
  eventLibrary['5-' + i] = sampleDay;
};

//june
for (var i = 1; i < 32; i++) {
  eventLibrary['6-' + i] = sampleDay;
};

//july
for (var i = 1; i < 31; i++) {
  eventLibrary['7-' + i] = sampleDay;
};

//august
for (var i = 1; i < 32; i++) {
  eventLibrary['8-' + i] = sampleDay;
};

//september
for (var i = 1; i < 31; i++) {
  eventLibrary['9-' + i] = sampleDay;
};

//october
for (var i = 1; i < 32; i++) {
  eventLibrary['10-' + i] = sampleDay;
};

//november
for (var i = 1; i < 31; i++) {
  eventLibrary['11-' + i] = sampleDay;
};

//december
for (var i = 1; i < 32; i++) {
  eventLibrary['12-' + i] = sampleDay;
};*/

export class CalendarDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'all', //'all', some event type, or 'specific'
      specificEvent: {}, //object that will have data for specfic date
    };

    this.setDisplay = this.setDisplay.bind(this);
    this.setSpecificEvent = this.setSpecificEvent.bind(this);

    //to be used to get the events for today, eventually replace with user set prop from app.js which just initializes to today
    //this.todayString = (this.props.date.getMonth() + 1 + '-' + this.props.date.getDate());
    //list of events for selected day
    //this.events = {};
    //this.colorScheme = {'Revolution': '#eb8f8f', 'Rebellion': '#ebbd8f', 'Labor': '#ceeb8f', 'Birthdays': '#c38feb', 'Assassinations': '#8f91eb', 'Other': '#b5c4b9'}
    this.colorScheme = {'Revolution': '#de4d43', 'Rebellion': '#de4d43', 'Labor': '#de4d43', 'Birthdays': '#de4d43', 'Assassinations': '#de4d43', 'Other': '#de4d43'}
  };

  backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
    if (this.state.display !== 'all') {
      this.setState({display: 'all'});
      return true;
    } else {
      BackHandler.exitApp();
    };
  });

  //componentWillMount() {
    //this.getEvents();
  //};

  setDisplay(component) {
    //component should only ever be 'all', some event type, or 'specific'
    this.setState({
      display: component
    });
  };

  setSpecificEvent(event) {
    this.setState({
      display: 'specific',
      event: event
    });
    //alert(event.description);
  };

  //getEvents() {
      //console.log(this.props.todayString);
      //console.log(eventLibrary[this.props.todayString]);
      //uncomment below and delete last line when you actually finish building event library
      //Object.assign(this.events, eventLibrary[this.props.todayString]);
      //Object.assign(this.events, eventLibrary['1-1']);
      //console.log(this.events);
  //};

  render() {
    console.log(this.props.events);
    //three possible views:
    //display === 'all' will show categories and specific event buttons
    //display === 'specific' will render a specific event's view, passing props to the SpecificEvent component
    //display !== 'all' or 'specific' will show a list of events for a specific category (in this case, display will equal event category name)
    return (
      <View style={styles.main}>
        {this.state.display === 'all' && <View style={styles.allEventsWrapper}>
          <View style={styles.onThisDay}>
            <StyledText text='On This Day in History: ' style={{fontSize: 22, textAlign: 'center', fontWeight: 'bold'}}/>
          </View>
          <View style={[styles.eventCategory, ]}>
            <TouchableOpacity
              onPress={() => this.setDisplay('Revolution')}
              style={{borderBottomWidth: 1, borderTopWidth: 1, backgroundColor: this.colorScheme['Revolution']}}
            >
              <StyledText text='Revolution' style={[styles.eventCategoryHeader]}/>
            </TouchableOpacity>
            {this.props.events['Revolution'].map((event) =>
              <TouchableOpacity
                onPress={() => this.setSpecificEvent(event)}
                key={event.title}
                style={styles.specificEventButton}
              >
                <StyledText text={event.title} style={styles.eventCategoryText}/>
              </TouchableOpacity>
            )}
          </View>

          <View style={[styles.eventCategory, ]}>
            <TouchableOpacity
              onPress={() => this.setDisplay('Rebellion')}
              style={{borderBottomWidth: 1, backgroundColor: this.colorScheme['Rebellion']}}
            >
              <StyledText text='Rebellion' style={styles.eventCategoryHeader}/>
            </TouchableOpacity>
            {this.props.events['Rebellion'].map((event) =>
              <TouchableOpacity
                onPress={() => this.setSpecificEvent(event)}
                key={event.title}
                style={styles.specificEventButton}
              >
                <StyledText text={event.title} style={styles.eventCategoryText} />
              </TouchableOpacity>
            )}
          </View>

          <View style={[styles.eventCategory, ]}>
            <TouchableOpacity
              onPress={() => this.setDisplay('Labor')}
              style={{borderBottomWidth: 1, backgroundColor: this.colorScheme['Labor']}}
            >
              <StyledText text='Labor' style={styles.eventCategoryHeader}/>
            </TouchableOpacity>
            {this.props.events['Labor'].map((event) =>
              <TouchableOpacity
                onPress={() => this.setSpecificEvent(event)}
                key={event.title}
                style={styles.specificEventButton}
              >
                <StyledText text={event.title} style={styles.eventCategoryText} />
              </TouchableOpacity>
            )}
          </View>

          <View style={[styles.eventCategory, ]}>
            <TouchableOpacity
              onPress={() => this.setDisplay('Birthdays')}
              style={{borderBottomWidth: 1, backgroundColor: this.colorScheme['Birthdays']}}
            >
              <StyledText text='Birthdays' style={styles.eventCategoryHeader}/>
            </TouchableOpacity>
            {this.props.events['Birthdays'].map((event) =>
              <TouchableOpacity
                onPress={() => this.setSpecificEvent(event)}
                key={event.title}
                style={styles.specificEventButton}
              >
                <StyledText text={event.title} style={styles.eventCategoryText} />
              </TouchableOpacity>
            )}
          </View>

          <View style={[styles.eventCategory, ]}>
            <TouchableOpacity
              onPress={() => this.setDisplay('Assassinations')}
              style={{borderBottomWidth: 1, backgroundColor: this.colorScheme['Assassinations']}}
            >
              <StyledText text='Assassinations' style={styles.eventCategoryHeader}/>
            </TouchableOpacity>
            {this.props.events['Assassinations'].map((event) =>
              <TouchableOpacity
                onPress={() => this.setSpecificEvent(event)}
                key={event.title}
                style={styles.specificEventButton}
              >
                <StyledText text={event.title} style={styles.eventCategoryText} />
              </TouchableOpacity>
            )}
          </View>

          <View style={[styles.eventCategory, ]}>
            <TouchableOpacity
              onPress={() => this.setDisplay('Other')}
              style={{borderBottomWidth: 1, backgroundColor: this.colorScheme['Other']}}
            >
              <StyledText text='Other' style={styles.eventCategoryHeader}/>
            </TouchableOpacity>
            {this.props.events['Other'].map((event) =>
              <TouchableOpacity
                onPress={() => this.setSpecificEvent(event)}
                key={event.title}
                style={styles.specificEventButton}
              >
                <StyledText text={event.title} style={styles.eventCategoryText} />
              </TouchableOpacity>
            )}
          </View>
        </View>}
        {this.state.display === 'specific' &&
          <SpecificEvent event={this.state.event} setDisplay={this.setDisplay} colorScheme={this.colorScheme}/>
        }
        {this.state.display !== 'all' && this.state.display !== 'specific' &&
          <View>
            <View style={{borderBottomWidth: 1, borderTopWidth: 0, backgroundColor: this.colorScheme[this.state.display]}}>
              <StyledText text={this.state.display} style={[styles.eventCategoryHeader]}/>
            </View>
            {this.props.events[this.state.display].map((event) =>
              <TouchableOpacity
                onPress={() => this.setSpecificEvent(event)}
                key={event.title}
                style={styles.specificEventButton}
              >
                <StyledText text={event.title} style={styles.eventCategoryText} />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => this.setDisplay('all')} style={{marginTop: 12, marginLeft: 0, width: 55, alignContent: 'center'}}>
              <Ionicons name="md-arrow-round-back" size={48} color="black" style={{marginLeft: 'auto', marginRight: 'auto'}}/>
            </TouchableOpacity>
          </View>
        }
      </View>
    );
  };
};
