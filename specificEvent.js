import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Linking, Image, Dimensions } from 'react-native';
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
    //react native does not handle automatic image re-sizing, so the following code does it
    //first, get dimensions of window and of event image
    const win = Dimensions.get('window');
    const imgSrc = this.props.event.imgSrc;
    const image = resolveAssetSource(imgSrc);
    const width = image.width;
    const height = image.height;
    //second, try resizing image to be around 33% of total view height
    var resizeHeight = win.height/3; //image will take up around 33% of the window's height
    var ratio = resizeHeight/height; //the ratio by which image has shrunk
    var resizeWidth = width * ratio; //apply ratio to width
    //if the resized image becomes too wide (happens with short but wide images)
    if (resizeWidth > win.width - 40) {
      //console.log('image too damn big');
      //resize the image with respect to width, setting it equal to 80% of total view width
      resizeWidth = win.width * 4/5;
      ratio = resizeWidth/width; //new ratio of shrunkedness
      resizeHeight = height * ratio; //apply new ratio to height
    };

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
          <View style={styles.descriptionImgWrapper}>
            {width !== 1 && <Image
              style={[styles.descriptionImg], {width: resizeWidth, height: resizeHeight}}
              source={this.props.event.imgSrc}
              resizeMode="contain"
            />}
          </View>
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
