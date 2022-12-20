import Text_ from '@HOC/Text_';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const TouchComponent = ({onPress, value}) => {
  return (
    <View style={styles.flexRow}>
      <Text_ size="display1">/</Text_>
      <TouchableOpacity onPress={onPress}>
        <Text_ size="display1" style={styles.pressable}>
          {value}
        </Text_>
      </TouchableOpacity>
    </View>
  );
};

TouchComponent.defaultProps = {
  onPress: () => {},
  value: '',
};

export default TouchComponent;

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  pressable: {
    opacity: 0.5,
  },
});
