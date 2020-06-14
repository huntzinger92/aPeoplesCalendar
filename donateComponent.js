import React from 'react';
import { Text, View, ScrollView, BackHandler, TouchableOpacity } from 'react-native';
import {StyledText} from './styledText.js';
import {styles} from './styles.js';

export function Donate() {
  return (
    <View style={styles.donateWrapper}>
      <View style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: 15, paddingBottom: 3, borderBottomWidth: 1}}>
        <StyledText text="A People's Calendar" style={{fontSize: 24,}}/>
      </View>
      <StyledText text='Donate message goes here. Consider just opening up a link to donate page instead.'/>
    </View>
  );
};
