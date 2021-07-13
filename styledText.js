import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles.js';

export class StyledText extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <Text selectable={true} style={[styles.text, this.props.style]}>{this.props.text}</Text>
    );
  };
};
