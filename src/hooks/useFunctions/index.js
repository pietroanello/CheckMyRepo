import {GlobalContext} from '@context/GlobalContext';
import Text_ from '@HOC/Text_';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import {PUSH_TOKEN} from 'dotenv';
import {useContext} from 'react';

const ERROR_COMPONENTS = {
  internet: () => (
    <Text_ style={{marginTop: 20}}>
      Check your <Text_ weight="bold">internet connection</Text_>
    </Text_>
  ),
  badRepo: () => (
    <Text_ style={{marginTop: 20}}>
      Check your <Text_ weight="bold">username</Text_> or your{' '}
      <Text_ weight="bold">repository</Text_> name
    </Text_>
  ),
  somethingWrong: () => (
    <Text_ weight="bold" style={{marginTop: 20}}>
      Ops! Something went wrong. Retry...
    </Text_>
  ),
};

axios.defaults.headers.post['Content-Type'] = 'application/json';

const checkInternet = async () => {
  try {
    const state = await NetInfo.fetch();
    return state?.isConnected;
  } catch (error) {
    return false;
  }
};

const useFunctions = () => {
  const {
    data: {user, repo},
  } = useContext(GlobalContext);

  const sendRepo = async () => {
    try {
      const res = await axios.post(
        `https://pushmore.io/webhook/${PUSH_TOKEN}`,
        {repoUrl: `https://github.com/${user}/${repo}`, sender: user},
      );

      if (res?.data !== 'OK')
        return {success: false, component: ERROR_COMPONENTS.somethingWrong};
      return {success: true};
    } catch (error) {
      return {success: false, component: ERROR_COMPONENTS.somethingWrong};
    }
  };

  const checkRepo = async () => {
    try {
      const hasInternet = await checkInternet();
      if (!hasInternet)
        return {success: false, component: ERROR_COMPONENTS.internet};
      if (!user || !repo)
        return {success: false, component: ERROR_COMPONENTS.badRepo};

      const res = await axios.get(`https://github.com/${user}/${repo}`);
      if (res) return {success: true};
    } catch (error) {
      return {success: false, component: ERROR_COMPONENTS.badRepo};
    }
  };

  return {sendRepo, checkRepo};
};

export default useFunctions;
