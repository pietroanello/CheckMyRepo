import React, {createContext, useState} from 'react';

export const GlobalContext = createContext();

const defaultData = {
  user: null,
  repo: null,
};

const GlobalContextProvider = props => {
  const [data, setData] = useState(defaultData);

  const resetData = () => setData(defaultData);

  const changeData = (type, value) => {
    setData(prev => ({...prev, [type]: value}));
  };

  return (
    <GlobalContext.Provider value={{data, resetData, changeData}}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
