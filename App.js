import React from 'react';
import { StatusBar, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import {StyledText} from './styledText.js';
import {CalendaryDisplay} from './calendarDisplay.js';
import {styles} from './styles.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'main', //main or about
    };
    this.setDisplay = this.setDisplay.bind(this);

    this.today = new Date();
  };

  setDisplay(component) {
    //component should only ever be main or about
    this.setState({
      display: component,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.everythingNotFooter}>
          <StatusBar />
          <View style={styles.header}>
            <StyledText text={this.today.toDateString()} style={{marginLeft: 'auto', marginRight: 'auto', fontSize: 24}}/>
          </View>
          <CalendaryDisplay/>
        </View>
        <View style={styles.footer}>
          {this.state.display === 'main' && <TouchableOpacity
            onPress={() => this.setDisplay('about')}
            style={styles.bottomButton}
          >
            <StyledText text='About' style={styles.bottomButtonText}/>
          </TouchableOpacity>
          }
          {this.state.display === 'about' && <TouchableOpacity
            onPress={() => this.setDisplay('main')}
            style={styles.bottomButton}
          >
            <StyledText text='Back' style={styles.bottomButtonText}/>
          </TouchableOpacity>
          }
          <TouchableOpacity style={[styles.bottomButton, {marginLeft: 1}]}>
            <StyledText text='Donate' style={styles.bottomButtonText}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
};
