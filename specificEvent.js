import React from 'react';
import { View, Dimensions, TouchableOpacity, Linking, Image } from 'react-native';
import {StyledText} from './styledText.js';
import {styles} from './styles.js';
import { AntDesign } from '@expo/vector-icons';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

//responsible for styling/rendering the data for a specific, user selected event. Rendered inside of calendarDisplay.js
export class SpecificEvent extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const imageUrl = `https://apeoplescalendar.org${this.props.event.imgSrc}`;
    const image = { uri: imageUrl };
    const hasImage = imageUrl !== 'https://apeoplescalendar.org/assets/eventPhotos/empty.jpg';
    const dimensions = Dimensions.get('window');

    return (
      <View style={{marginBottom: 15, marginTop: 10}}>
        <View style={{marginTop: 7, width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
          <TouchableOpacity onPress={() => this.props.setDisplay('all')} style={{alignContent: 'center', width: 70}}>
            <AntDesign name="arrowleft" size={32} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.descriptionWrapper}>
          <View style={{alignSelf: 'center'}}>
            <StyledText text={this.props.event.title} style={{textAlign: 'center', alignSelf: 'center', fontSize: 23}}/>
          </View>
          <View style={styles.descriptionDateWrapper}>
            <StyledText text={this.props.event.date} style={{marginLeft: 'auto', marginRight: 'auto', fontSize: 20}}/>
          </View>
          {hasImage && 
            <View style={{...styles.descriptionImgWrapper, width: dimensions.width * .7, height: dimensions.height * .3}}>            
              <Image
                source={image}
                style={{width: dimensions.width * .7, height: dimensions.height * .3}}
              />
            </View>
          }
          <View style={styles.descriptionTextWrapper}>
            <StyledText text={this.props.event.description} style={{lineHeight: 20}}/>
          </View>
          <View style={styles.linkContainer}>
            <TouchableOpacity
              style={styles.linkWrapper}
              onPress={() => Linking.openURL(this.props.event.infoSrc)}
            >
              <StyledText text="Source" style={styles.linkText}/>
            </TouchableOpacity>
            {this.props.event.infoSrc !== this.props.event.link && 
              <TouchableOpacity
                style={styles.linkWrapper}
                onPress={() => Linking.openURL(this.props.event.link)}
              >
                <StyledText text="Learn More" style={styles.linkText}/>
              </TouchableOpacity>
            }
          </View>
        </View>
        <View style={{marginTop: 7, width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
          <TouchableOpacity onPress={() => this.props.setDisplay('all')} style={{alignContent: 'center', width: 70}}>
            <AntDesign name="arrowleft" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
};
