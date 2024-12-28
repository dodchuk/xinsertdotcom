'use client';

import React, { useState } from 'react';
import Login from '@/ui/Login';

export default function Snap() {
  const [requireLogin, setRequireLogin] = useState(true);
  const onLogin = async () => {
    setRequireLogin(false);
  };

  const onLoginError = () => {
    setRequireLogin(true);
  };

  return requireLogin ? (
      <Login
        onSuccess={ onLogin }
        onError={ onLoginError }
      />
    ) : (
      <>
        <h2>Я спробував</h2>
        В мене вийшло!
      </>
    );
}
