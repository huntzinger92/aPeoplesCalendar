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
      <View style={styles.aboutHeaderWrapper}>
        <StyledText
          text="About Us"
          style={styles.aboutHeader}
        />
      </View>
      <StyledText
        text="A People's Calendar (aPC) seeks to promote the worldwide history of working class movements and liberation struggles."
        style={styles.aboutText}
      />
      <StyledText
        text="While we have no illusions about this calendar being comprehensive, our hope is that aPC makes this complex and multi-faceted history a little easier to digest. Each event page is just a short summary of the event with sources provided so the reader can easily explore the topic further."
        style={styles.aboutText}
      />
      <StyledText
        text="The figures and events included here are not presented with our endorsement, but shared with the understanding that the history of all liberation struggle is worth knowing - both its successes and its failures."
        style={styles.aboutText}
      />
      <View style={[styles.aboutHeaderWrapper, {marginTop: 5,}]}>
        <StyledText
          text="How to Help"
          style={styles.aboutHeader}
        />
      </View>
      <StyledText
        text="Notice an important event, person, or organization missing from the calendar? Use the contact button below to make a suggest an addition."
        style={styles.aboutText}
      />
      <StyledText
        text="Also, this project is open source and we welcome volunteers who would like to contribute, whether it's something as simple as fixing typos or as complex as adding major features. You can read more about how to support us by going to our website (linked below)."
        style={styles.aboutText}
      />
      <TouchableOpacity style={styles.contactButton} onPress={() => Linking.openURL('mailto:aPeoplesCalendar@gmail.com')}>
        <StyledText text='Contact' style={{fontSize: 27, color: 'white', marginLeft: 15, marginRight: 15,}}/>
      </TouchableOpacity>
    </ScrollView>
  );
};
