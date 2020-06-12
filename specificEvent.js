import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import {StyledText} from './styledText.js';
import {styles} from './styles.js';

//responsible for styling/rendering the data for a specific, user selected event. Rendered inside of calendarDisplay.js
export class SpecificEvent extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <View>
        <StyledText text={this.props.event.title} style={{textAlign: 'center', fontSize: 24}}/>
        <StyledText text={this.props.event.description} />
        <StyledText text={'Read More Here: ' + this.props.event.link} />
        <TouchableOpacity onPress={() => this.props.setDisplay('all')}>
          <StyledText text='Back Arrow' style={{fontSize: 20, fontWeight: 'bold'}}/>
        </TouchableOpacity>
      </View>
    );
  };
};
