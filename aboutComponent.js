import React from "react";
import { Text, View, ScrollView, BackHandler, TouchableOpacity, Linking } from "react-native";
import {StyledText} from "./styledText.js";
import {styles} from "./styles.js";

export function About() {
  return (
    <ScrollView style={styles.aboutWrapper}>
      <View style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: 15, paddingBottom: 3, borderBottomWidth: 1}}>
        <StyledText text="A People's Calendar" style={{fontSize: 24,}}/>
      </View>
      <StyledText
        text="A People's Calendar (aPC) seeks to promote the worldwide history of working class movements and liberation struggles."
        style={styles.aboutText}
      />
      <StyledText
        text="Unfortunately, this history is often overwhelming in complexity and suppressed/obscured by various oppressive forces."
        style={styles.aboutText}
      />
      <StyledText
        text="While in no way comprehensive, it is my hope that this project makes this history easier to approach and study. Although I do my best to fact-check the summaries of each event, this calendar is ultimately meant to provide a jumping off point for users to research the history and form their own opinions."
        style={styles.aboutText}
      />
      <StyledText
        text="The figures and events included here are not presented with my endorsement, but shared with the understanding that the history of all working class struggle is worth knowing, in both its successes and its failures."
        style={styles.aboutText}
      />
      <StyledText
        text="I am always looking out for important events, people, and texts that are missing from the calendar. Feel free to contact me with suggestions, and please consider donating to help make such additions and upkeep happen more quickly."
        style={styles.aboutText}
      />
      <TouchableOpacity style={styles.contactButton} onPress={() => Linking.openURL('https://expo.io/@tts2p4/aPeoplesCalendar')}>
        <StyledText text='Contact' style={{fontSize: 27, color: 'white', marginLeft: 15, marginRight: 15,}}/>
      </TouchableOpacity>
    </ScrollView>
  );
};
