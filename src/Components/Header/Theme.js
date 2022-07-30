import React, { useState, useEffect } from 'react';
import './Theme.css'

function Theme() {
  const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useState(isSystemDark);
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    }
    else {
      document.body.classList.remove('dark');
    }

  }, [isDark]);
  return (
    <div className='theme'>
      {isDark ? <ion-icon name="partly-sunny-outline" onClick={() => setIsDark(false)}></ion-icon> : <ion-icon name="cloudy-night-outline" onClick={() => setIsDark(true)}></ion-icon>}
    </div>
  )
}

export default Theme
