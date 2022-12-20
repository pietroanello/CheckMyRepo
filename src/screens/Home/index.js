import BottomButton from '@components/BottomButton';
import {GlobalContext} from '@context/GlobalContext';
import SafeAreaView_ from '@HOC/SafeAreaView_';
import Text_ from '@HOC/Text_';
import useFunctions from '@hooks/useFunctions';
import COLORS from '@utils/colors';
import ROUTES from '@utils/routes';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const Home = ({navigation}) => {
  const {data, resetData} = useContext(GlobalContext);
  const [status, setStatus] = useState();
  const [type, setType] = useState('check');
  const {checkRepo, sendRepo} = useFunctions();

  useEffect(() => {
    setStatus();
    setType('check');
  }, [data]);

  const renderTouchComponent = type => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text_ size="display1">/</Text_>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.Edit, {type})}>
          <Text_ size="display1" style={styles.pressable}>
            {data[type] || type}
          </Text_>
        </TouchableOpacity>
      </View>
    );
  };

  const handlePress = async () => {
    switch (type) {
      case 'check':
        let res = await checkRepo();
        setStatus(res);
        res.success && setType('send');
        break;
      case 'send':
        res = await sendRepo();
        if (res.success) {
          setStatus();
          setType('cool');
        } else {
          setStatus(res);
        }
        break;
      case 'cool':
        resetData();
        setType('check');
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView_
      style={{
        paddingTop: 43,
        backgroundColor: !status
          ? 'white'
          : status.success
          ? COLORS.success
          : COLORS.error,
      }}>
      {type !== 'cool' ? (
        <>
          <Text_ weight="bold" style={styles.head}>
            Set the repository address
          </Text_>
          <Text_ size="display1">github.com</Text_>
          {renderTouchComponent('user')}
          {renderTouchComponent('repo')}
          {status && !status.success && (
            <Text_ weight="bold" style={styles.error}>
              {status.type}
            </Text_>
          )}
        </>
      ) : (
        <Text_ size="display1" weight="bold" style={styles.done}>
          All done! Repository sent.
        </Text_>
      )}
      <BottomButton onPress={handlePress} type={type} />
    </SafeAreaView_>
  );
};

export default Home;

const styles = StyleSheet.create({
  head: {
    marginBottom: 20,
  },
  error: {
    marginTop: 20,
  },
  pressable: {
    opacity: 0.5,
  },
  done: {
    marginTop: 40,
    textAlign: 'center',
    width: '90%',
    marginLeft: '5%',
  },
});
