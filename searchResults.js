import React from 'react';
import { Text, View, ScrollView, BackHandler, TouchableOpacity } from 'react-native';
import {StyledText} from './styledText.js';
import {styles} from './styles.js';

import {SpecificEvent} from './specificEvent.js';

export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'all', //'all' or 'specific', if 'all', expandList resets to every list being expanded (all true)
      specificEvent: {}, //object that will have data for specfic date
    };

    this.setDisplay = this.setDisplay.bind(this);
    this.setSpecificEvent = this.setSpecificEvent.bind(this);

    this.colorScheme = {'Revolution': '#de4d43', 'Rebellion': '#de4d43', 'Labor': '#de4d43', 'Birthdays': '#de4d43', 'Assassinations': '#de4d43', 'Other': '#de4d43'};
  };

  setDisplay(component) {
    //component should just be all or specific
    this.setState({
      display: component
    });
  };

  setSpecificEvent(event) {
    this.setState({
      specificEvent: event,
      display: 'specific',
    });
  };

  render() {
    return (
      <View>
        {this.state.display === 'all' &&
          this.props.events.map((event) =>
            <TouchableOpacity
              onPress={() => this.setSpecificEvent(event)}
              key={event.title}
              style={styles.specificEventButton}
            >
              <StyledText text={event.title} style={styles.eventCategoryText}/>
            </TouchableOpacity>
          )
        }
        {this.state.display === 'specific' &&
          <SpecificEvent event={this.state.specificEvent} setDisplay={this.setDisplay} colorScheme={this.colorScheme}/>
        }
      </View>
    );
  };
};
