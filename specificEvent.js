import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import {StyledText} from './styledText.js';
import {styles} from './styles.js';
import { Ionicons } from '@expo/vector-icons';

//responsible for styling/rendering the data for a specific, user selected event. Rendered inside of calendarDisplay.js
export class SpecificEvent extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    console.log(this.props.event.imgSrc);
    return (
      <View>
        <View style={styles.descriptionWrapper}>
          <View>
            <StyledText text={this.props.event.title} style={{textAlign: 'center', fontSize: 24}}/>
          </View>
          <View style={styles.descriptionDateWrapper}>
            <StyledText text={this.props.event.date} style={{marginLeft: 'auto', marginRight: 'auto', fontSize: 20}}/>
          </View>
          <View style={styles.descriptionImgWrapper}>
            <Image
              style={styles.descriptionImg}
              source={this.props.event.imgSrc}
              resizeMode={'cover'}
            />
          </View>
          <View style={styles.descriptionTextWrapper}>
            <StyledText text={this.props.event.description}/>
          </View>
          <View style={styles.sourceWrapper}>
            <StyledText text={this.props.event.infoSrc} />
          </View>
          <View style={styles.learnMoreWrapper}>
            <StyledText text={'Read More Here: ' + this.props.event.link} />
          </View>
        </View>
        <View style={{marginTop: 12, width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
          <TouchableOpacity onPress={() => this.props.setDisplay('all')} style={{alignContent: 'center', width: 70}}>
            <Ionicons name="md-arrow-round-back" size={48} color="black"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
};
