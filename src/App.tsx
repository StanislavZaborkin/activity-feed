import React, { createContext } from 'react';

import MainPage from './pages/Main';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { CONTACT_USER, CURRENT_USER } from './shared/utils/constants';

library.add(fas);

const contextValue = {
  currentUser: CURRENT_USER,
  contactUser: CONTACT_USER,
};

export const UserContext = createContext(contextValue);

function App() {
  return (
    <UserContext.Provider value={contextValue}>
      <MainPage />
    </UserContext.Provider>
  );
}

export default App;
