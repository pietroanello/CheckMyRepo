import {getFontSize, getFontWeight} from '@utils/dimensions';
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const TextInput_ = props => {
  return (
    <TextInput
      autoCapitalize="none"
      placeholderTextColor="gray"
      {...props}
      style={[
        styles.text,
        props.style,
        {
          fontSize: getFontSize(props.size),
          fontFamily: getFontWeight(props.weight),
        },
      ]}
    />
  );
};

export default TextInput_;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    textTransform: 'lowercase',
  },
});
