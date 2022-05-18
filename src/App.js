import React, { useState, useEffect } from 'react';
import './style.css';
import { signInWithGoogle } from './firebase';

const App = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>SignIn with Google</button>
    </div>
  );
};
export default App;
