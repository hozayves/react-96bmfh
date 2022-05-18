import React, { useState, useEffect } from 'react';
import './style.css';
import { signInWithGoogle } from './firebase';

const App = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>SignIn with Google</button>
      <h1>{localStorage.getItem('name')}</h1>
      <h1>{localStorage.getItem('email')}</h1>
      <img src={localStorage.getItem('photoURL')} />
    </div>
  );
};
export default App;
