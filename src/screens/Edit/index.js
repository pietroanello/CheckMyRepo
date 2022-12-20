import BottomButton from '@components/BottomButton';
import {GlobalContext} from '@context/GlobalContext';
import SafeAreaView_ from '@HOC/SafeAreaView_';
import TextInput_ from '@HOC/TextInput_';
import Text_ from '@HOC/Text_';
import React, {useContext, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const TITLES = {
  user: 'USER',
  repo: 'REPOSITORY',
};

const Edit = ({route, navigation}) => {
  const {type} = route.params;
  const {data, changeData} = useContext(GlobalContext);
  const [value, setValue] = useState(data[type]);

  const handlePress = () => {
    changeData(type, value);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      enabled={Platform.OS === 'android' ? false : true}
      behavior={'padding'}
      keyboardVerticalOffset={-35}>
      <SafeAreaView_>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{marginRight: 25}}>
            <Image source={require('@img/back.png')} />
          </TouchableOpacity>
          <Text_ weight="bold">{TITLES[type]}</Text_>
        </View>
        <TextInput_
          placeholder={`Type your ${
            type === 'user' ? 'github username' : 'repository name'
          }`}
          value={value}
          onChangeText={setValue}
          onEndEditing={handlePress}
          style={styles.textInput}
          autoFocus={true}
        />
        <BottomButton value="done" onPress={handlePress} />
      </SafeAreaView_>
    </KeyboardAvoidingView>
  );
};

export default Edit;

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 3,
    paddingBottom: 3,
    marginTop: 40,
    marginHorizontal: '4%',
  },
});
