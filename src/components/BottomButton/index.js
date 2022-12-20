import Text_ from '@HOC/Text_';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const OPTIONS = {
  check: 'CHECK',
  checking: 'CHECKING...',
  done: 'DONE',
  send: 'SEND',
  sending: 'SENDING...',
  cool: 'COOL',
};

const BottomButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.bottomButtonContainer}>
      <Text_ weight="bold">{OPTIONS[props.value]}</Text_>
    </TouchableOpacity>
  );
};

BottomButton.defaultProps = {
  value: 'check',
};

export default BottomButton;

const styles = StyleSheet.create({
  bottomButtonContainer: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
    marginBottom: 30,
  },
});
