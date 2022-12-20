import Text_ from '@HOC/Text_';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const OPTIONS = {
  check: 'CHECK',
  done: 'DONE',
  send: 'SEND',
  cool: 'COOL',
};

const BottomButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.bottomButtonContainer}>
      <Text_ weight="bold">{OPTIONS[props.type]}</Text_>
    </TouchableOpacity>
  );
};

BottomButton.defaultProps = {
  type: 'check',
};

export default BottomButton;

const styles = StyleSheet.create({
  bottomButtonContainer: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
    marginBottom: 30,
  },
});
