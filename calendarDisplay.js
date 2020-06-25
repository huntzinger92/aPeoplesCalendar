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

export class CalendarDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'all', //'all' or 'specific', if 'all', expandList resets to every list being expanded (all true)
      specificEvent: {}, //object that will have data for specfic date
      //expandList is an object where each key is a category and the value is whether or not the list should be expanded
      expandList: {'Revolution': true, 'Rebellion': true, 'Labor': true, 'Birthdays': true, 'Assassinations': true, 'Other': true},
    };

    this.setDisplay = this.setDisplay.bind(this);
    this.setSpecificEvent = this.setSpecificEvent.bind(this);
    this.handleExpandCollapse = this.handleExpandCollapse.bind(this);

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

  setDisplay(component) {
    //component should only ever be 'all' or 'specific'
    if (component === 'all') {
      this.setState({
        display: component,
        expandList: {'Revolution': true, 'Rebellion': true, 'Labor': true, 'Birthdays': true, 'Assassinations': true, 'Other': true},
      });
    } else {
      this.setState({
        display: component
      });
    };
  };

  handleExpandCollapse(category) {
    var tempExpandList = this.state.expandList;
    tempExpandList[category] = !tempExpandList[category];
    this.setState({
      expandList: tempExpandList
    });
  };

  setSpecificEvent(event) {
    this.setState({
      display: 'specific',
      event: event
    });
  };

  render() {
    //three possible views:
    //display === 'all' will show categories and specific event buttons
    //display === 'specific' will render a specific event's view, passing props to the SpecificEvent component
    //{this.props.events['Revolution'][0].description.length > 0 &&
    return (
      <View style={styles.main}>
        {this.state.display === 'all' && <View style={styles.allEventsWrapper}>
          <View style={styles.onThisDay}>
            <StyledText text='On This Day in History' style={{fontSize: 22, textAlign: 'center', fontWeight: 'bold'}}/>
          </View>
          {this.props.events['Revolution'][0].description.length > 0 && <View style={[styles.eventCategory, ]}>
            <TouchableOpacity
              onPress={() => this.handleExpandCollapse('Revolution')}
              style={{borderBottomWidth: 1, backgroundColor: this.colorScheme['Revolution']}}
            >
              <StyledText text='Revolution' style={[styles.eventCategoryHeader]}/>
            </TouchableOpacity>
            {this.state.expandList['Revolution'] && this.props.events['Revolution'].map((event) =>
              <TouchableOpacity
                onPress={() => this.setSpecificEvent(event)}
                key={event.title}
                style={styles.specificEventButton}
              >
                <StyledText text={event.title} style={styles.eventCategoryText}/>
              </TouchableOpacity>
            )}
          </View>}

          {this.props.events['Rebellion'][0].description.length > 0 && <View style={[styles.eventCategory, ]}>
            <TouchableOpacity
              onPress={() => this.handleExpandCollapse('Rebellion')}
              style={{borderBottomWidth: 1, backgroundColor: this.colorScheme['Rebellion']}}
            >
              <StyledText text='Rebellion' style={styles.eventCategoryHeader}/>
            </TouchableOpacity>
            {this.state.expandList['Rebellion'] && this.props.events['Rebellion'].map((event) =>
              <TouchableOpacity
                onPress={() => this.setSpecificEvent(event)}
                key={event.title}
                style={styles.specificEventButton}
              >
                <StyledText text={event.title} style={styles.eventCategoryText} />
              </TouchableOpacity>
            )}
          </View>}

          {this.props.events['Labor'][0].description.length > 0 && <View style={[styles.eventCategory, ]}>
            <TouchableOpacity
              onPress={() => this.handleExpandCollapse('Labor')}
              style={{borderBottomWidth: 1, backgroundColor: this.colorScheme['Labor']}}
            >
              <StyledText text='Labor' style={styles.eventCategoryHeader}/>
            </TouchableOpacity>
            {this.state.expandList['Labor'] && this.props.events['Labor'].map((event) =>
              <TouchableOpacity
                onPress={() => this.setSpecificEvent(event)}
                key={event.title}
                style={styles.specificEventButton}
              >
                <StyledText text={event.title} style={styles.eventCategoryText} />
              </TouchableOpacity>
            )}
          </View>}

          {this.props.events['Birthdays'][0].description.length > 0 && <View style={[styles.eventCategory, ]}>
            <TouchableOpacity
              onPress={() => this.handleExpandCollapse('Birthdays')}
              style={{borderBottomWidth: 1, backgroundColor: this.colorScheme['Birthdays']}}
            >
              <StyledText text='Birthdays' style={styles.eventCategoryHeader}/>
            </TouchableOpacity>
            {this.state.expandList['Birthdays'] && this.props.events['Birthdays'].map((event) =>
              <TouchableOpacity
                onPress={() => this.setSpecificEvent(event)}
                key={event.title}
                style={styles.specificEventButton}
              >
                <StyledText text={event.title} style={styles.eventCategoryText} />
              </TouchableOpacity>
            )}
          </View>}

          {this.props.events['Assassinations'][0].description.length > 0 && <View style={[styles.eventCategory, ]}>
            <TouchableOpacity
              onPress={() => this.handleExpandCollapse('Assassinations')}
              style={{borderBottomWidth: 1, backgroundColor: this.colorScheme['Assassinations']}}
            >
              <StyledText text='Assassinations' style={styles.eventCategoryHeader}/>
            </TouchableOpacity>
            {this.state.expandList['Assassinations'] && this.props.events['Assassinations'].map((event) =>
              <TouchableOpacity
                onPress={() => this.setSpecificEvent(event)}
                key={event.title}
                style={styles.specificEventButton}
              >
                <StyledText text={event.title} style={styles.eventCategoryText} />
              </TouchableOpacity>
            )}
          </View>}

          {this.props.events['Other'][0].description.length > 0 && <View style={[styles.eventCategory]}>
            <TouchableOpacity
              onPress={() => this.handleExpandCollapse('Other')}
              style={{borderBottomWidth: 1, backgroundColor: this.colorScheme['Other']}}
            >
              <StyledText text='Other' style={styles.eventCategoryHeader}/>
            </TouchableOpacity>
            {this.state.expandList['Other'] && this.props.events['Other'].map((event) =>
              <TouchableOpacity
                onPress={() => this.setSpecificEvent(event)}
                key={event.title}
                style={styles.specificEventButton}
              >
                <StyledText text={event.title} style={styles.eventCategoryText} />
              </TouchableOpacity>
            )}
          </View>}
        </View>}
        {this.state.display === 'specific' &&
          <SpecificEvent event={this.state.event} setDisplay={this.setDisplay} colorScheme={this.colorScheme}/>
        }
      </View>
    );
  };
};
