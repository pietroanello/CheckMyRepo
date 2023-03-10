import {getFontSize, getFontWeight} from '@utils/dimensions';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Text_ = props => {
  return (
    <Text
      {...props}
      style={[
        styles.text,
        props.style,
        {
          fontSize: getFontSize(props.size),
          fontFamily: getFontWeight(props.weight),
        },
      ]}>
      {props.children}
    </Text>
  );
};

export default Text_;

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
