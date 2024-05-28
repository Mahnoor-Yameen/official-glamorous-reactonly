import React from 'react';
import { signupcontext } from './context/signup/contextsignup';
import { useContext } from 'react';
import User from "./UserType";
import Default from './default';
import Admin from './admin'

export default function App() {
  const AvailableApps = {
    default: Default,
    user: User,
    admin:Admin
  };

  const { login_state } = useContext(signupcontext);

  const AppSelection = (role) => AvailableApps[role] || AvailableApps["default"]; // Yahaan role ke according component select karna hai.

  const CurrentApp = AppSelection(login_state.token);
  
  return (
    <>
      <CurrentApp />
    </>
  );
}
