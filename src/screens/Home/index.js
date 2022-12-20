import BottomButton from '@components/BottomButton';
import TouchComponent from '@components/TouchComponent';
import {GlobalContext} from '@context/GlobalContext';
import SafeAreaView_ from '@HOC/SafeAreaView_';
import Text_ from '@HOC/Text_';
import useFunctions from '@hooks/useFunctions';
import COLORS from '@utils/colors';
import ROUTES from '@utils/routes';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  const {data, resetData} = useContext(GlobalContext);
  const [status, setStatus] = useState();
  const [type, setType] = useState('check');
  const {checkRepo, sendRepo} = useFunctions();

  useEffect(() => {
    setStatus();
    setType('check');
  }, [data]);

  const pressTouch = type => navigation.navigate(ROUTES.Edit, {type});

  const handlePress = async () => {
    switch (type) {
      case 'check':
        setType('checking');
        let res = await checkRepo();
        setStatus(res);
        setType(res.success ? 'send' : 'check');
        break;
      case 'send':
        setType('sending');
        res = await sendRepo();
        setStatus(res?.success ? null : res);
        setType(res?.success ? 'cool' : 'send');
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
          <TouchComponent
            onPress={() => pressTouch('user')}
            value={data.user || 'user'}
          />
          <TouchComponent
            onPress={() => pressTouch('repo')}
            value={data.repo || 'repo'}
          />
          {status && !status.success && status.component()}
        </>
      ) : (
        <Text_ size="display1" weight="bold" style={styles.done}>
          All done! Repository sent.
        </Text_>
      )}
      <BottomButton onPress={handlePress} value={type} />
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
  done: {
    marginTop: 40,
    textAlign: 'center',
    width: '90%',
    marginLeft: '5%',
  },
});
