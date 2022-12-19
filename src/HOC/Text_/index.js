import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Text_ = props => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      Text_
    </Text>
  );
};

export default Text_;

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
