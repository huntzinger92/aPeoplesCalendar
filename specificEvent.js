import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import {StyledText} from './styledText.js';
import {styles} from './styles.js';
import { Ionicons } from '@expo/vector-icons';

//responsible for styling/rendering the data for a specific, user selected event. Rendered inside of calendarDisplay.js
export class SpecificEvent extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    //console.log(this.props.event.imgSrc);
    return (
      <View style={{marginBottom: 15}}>
        <View style={{marginTop: 7, width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
          <TouchableOpacity onPress={() => this.props.setDisplay('all')} style={{alignContent: 'center', width: 70}}>
            <Ionicons name="md-arrow-round-back" size={32} color="black"/>
          </TouchableOpacity>
        </View>
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
          <View style={styles.linkContainer}>
            <TouchableOpacity
              style={styles.linkWrapper}
              onPress={() => Linking.openURL(this.props.event.infoSrc)}
            >
              <StyledText text="Source" style={styles.linkText}/>
            </TouchableOpacity>
            {this.props.event.infoSrc !== this.props.event.link && <TouchableOpacity
              style={styles.linkWrapper}
              onPress={() => Linking.openURL(this.props.event.link)}
            >
              <StyledText text="Learn More" style={styles.linkText}/>
            </TouchableOpacity>}
          </View>
        </View>
      </View>
    );
  };
};
