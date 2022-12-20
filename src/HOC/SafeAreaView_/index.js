import {scaleWidth} from '@utils/dimensions';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SafeAreaView_ = props => {
  return <SafeAreaView {...props} style={[styles.container, props.style]} />;
};

export default SafeAreaView_;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scaleWidth(18),
  },
});
