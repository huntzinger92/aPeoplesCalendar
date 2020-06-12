import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import {StyledText} from './styledText.js';
import {styles} from './styles.js';
import {eventLibrary} from './eventLibrary.js';
import {SpecificEvent} from './specificEvent.js';

//three views possible set by display prop in state: 'all', some type ('Revolution', 'Rebellion', etc.), and 'specific'. Respectively, all events for the day, events only of
//a specific type, or a specific event (includes detail)

export class CalendaryDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'all', //'all', some event type, or 'specific'
      specificEvent: {}, //object that will have data for specfic date
    };

    this.createDateString = this.createDateString.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
    this.setSpecificEvent = this.setSpecificEvent.bind(this);

    //to be used to get the events for today, eventually replace with user set prop from app.js which just initializes to today
    this.todayString = '';
    //list of events for selected day
    this.events = {};
  };

  componentWillMount() {
    this.getEvents();
  };

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

  createDateString() {
    var today = new Date();
    this.todayString = (today.getUTCMonth() + 1) + '-' + today.getUTCDay();
  };

  getEvents() {
    if (!this.todayString) {
      this.createDateString();
      //uncomment below and delete last line when you actually finish building library
      //Object.assign(eventLibrary[this.todayString], this.events);
      Object.assign(this.events, eventLibrary['1-1']);
      //console.log(this.events);
    };
  };

  render() {
    return (
      <View style={styles.main}>
        {this.state.display === 'all' && <View style={styles.allEventsWrapper}>
          <View style={styles.onThisDay}>
            <StyledText text='On this day in socialist history: ' style={{fontSize: 24, textAlign: 'center', fontWeight: 'bold'}}/>
          </View>
          <View style={[styles.eventCategory, ]}>
            <TouchableOpacity
              onPress={() => this.setDisplay('Revolution')}
              style={{borderBottomWidth: 1, borderTopWidth: 1, backgroundColor: '#eb8f8f'}}
            >
              <StyledText text='Revolution' style={[styles.eventCategoryHeader]}/>
            </TouchableOpacity>
            {this.events['Revolution'].map((event) =>
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
              style={{borderBottomWidth: 1, backgroundColor: '#ebbd8f'}}
            >
              <StyledText text='Rebellion' style={styles.eventCategoryHeader}/>
            </TouchableOpacity>
            {this.events['Rebellion'].map((event) =>
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
              style={{borderBottomWidth: 1, backgroundColor: '#ceeb8f'}}
            >
              <StyledText text='Labor' style={styles.eventCategoryHeader}/>
            </TouchableOpacity>
            {this.events['Labor'].map((event) =>
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
              style={{borderBottomWidth: 1, backgroundColor: '#c38feb'}}
            >
              <StyledText text='Birthdays' style={styles.eventCategoryHeader}/>
            </TouchableOpacity>
            {this.events['Birthdays'].map((event) =>
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
              onPress={() => this.setDisplay('Assasinations')}
              style={{borderBottomWidth: 1, backgroundColor: '#8f91eb'}}
            >
              <StyledText text='Assasinations' style={styles.eventCategoryHeader}/>
            </TouchableOpacity>
            {this.events['Assasinations'].map((event) =>
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
              style={{borderBottomWidth: 1, backgroundColor: '#d4d4d4'}}
            >
              <StyledText text='Other' style={styles.eventCategoryHeader}/>
            </TouchableOpacity>
            {this.events['Other'].map((event) =>
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
          <SpecificEvent event={this.state.event} setDisplay={this.setDisplay}/>
        }
        {this.state.display !== 'all' && this.state.display !== 'specific' &&
          <View>
            <StyledText text={this.state.display} style={{fontSize: 22}}/>
            {this.events[this.state.display].map((event) =>
              <TouchableOpacity
                onPress={() => this.setSpecificEvent(event)}
                key={event.title}
              >
                <StyledText text={event.title} style={styles.eventCategoryText} />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => this.setDisplay('all')}>
              <StyledText text='Back Arrow' style={{fontSize: 22, fontWeight: 'bold'}}/>
            </TouchableOpacity>
          </View>
        }
      </View>
    );
  };
};
