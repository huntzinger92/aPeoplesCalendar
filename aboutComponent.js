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
        text="A People's Calendar seeks to spread the knowledge of working class movements throughout history."
        style={styles.aboutText}
      />
      <StyledText
        text="While hardly comprehensive, this calendar strives to highlight all forms of working class struggle, from union agitation to indigenous resistance to slave revolts to communist revolution, and to do so in a format that is easy to access and read from."
        style={styles.aboutText}
      />
      <StyledText
        text="The source of information for all calendar events is provided with the description of the event."
        style={styles.aboutText}
      />
      <StyledText
        text="We are always looking out for important events, people, and texts that are missing from the calendar. Feel free to contact us with suggestions, and please consider donating to help make such additions and upkeep happen more quickly."
        style={styles.aboutText}
      />
      <TouchableOpacity style={{marginLeft: 'auto', marginRight: 'auto', borderWidth: 1, borderRadius: 10, backgroundColor: '#1c1c1c', marginTop: 13, padding: 10, justifyContent: 'center', alignContent: 'center'}} onPress={() => Linking.openURL('https://trevorspheresmith.com/contact')}>
        <StyledText text='Contact Us' style={{fontSize: 27, color: 'white'}}/>
      </TouchableOpacity>
    </ScrollView>
  );
};
