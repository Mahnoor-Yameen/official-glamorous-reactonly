import React from 'react';
import { AccountContextVariable } from './context/AccountContext';
import './index.css'
import { useContext } from 'react';
import './App.css'
import User from "./UserType";
import Default from './default';
import Admin from './admin'

export default function App() {
  const AvailableApps = {
    default: Default,
    user: User,
    admin:Admin
  };

  const { account_state } = useContext(AccountContextVariable);

  const AppSelection = (role) => AvailableApps[role] || AvailableApps["default"]; // Yahaan role ke according component select karna hai.

  const CurrentApp = AppSelection(account_state.token);
  
  return (
    <>
      <CurrentApp />
    </>
  );
}
