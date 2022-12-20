import {GlobalContext} from '@context/GlobalContext';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import {PUSH_TOKEN} from 'dotenv';
import {useContext} from 'react';

const ERROR_TYPES = {
  internet: 'Check your internet connection',
  badRepo: 'Check your username or your repository name',
  somethingWrong: 'Ops! Something went wrong. Retry...',
};

const useFunctions = () => {
  const {
    data: {user, repo},
  } = useContext(GlobalContext);

  const checkInternet = async () => {
    try {
      const state = await NetInfo.fetch();
      return state?.isConnected;
    } catch (error) {
      return false;
    }
  };

  const sendRepo = async () => {
    try {
      const res = await axios.post(
        `https://pushmore.io/webhook/${PUSH_TOKEN}`,
        {repoUrl: `https://github.com/${user}/${repo}`, sender: user},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (res?.data !== 'OK')
        return {success: false, type: ERROR_TYPES.somethingWrong};
      return {success: true};
    } catch (error) {
      console.log(error);
      return {success: false, type: ERROR_TYPES.somethingWrong};
    }
  };

  const checkRepo = async () => {
    try {
      const hasInternet = await checkInternet();
      if (!hasInternet) return {success: false, type: ERROR_TYPES.internet};
      if (!user || !repo) return {success: false, type: ERROR_TYPES.badRepo};

      const res = await axios.get(`https://github.com/${user}/${repo}`);
      if (res) return {success: true};
    } catch (error) {
      return {success: false, type: ERROR_TYPES.badRepo};
    }
  };

  return {sendRepo, checkRepo, checkInternet};
};

export default useFunctions;
