import React from 'react';
import {toggle} from "./DarkToggle.module.css"
import { ThemeContext } from './ThemeContext';

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <label className={toggle}>
      <input
      className={toggle}
        type="checkbox"
        checked={colorMode === 'dark'}
        onChange={ev => {
          setColorMode(ev.target.checked ? 'dark' : 'light');
        }}
      />{' '}
      dark
    </label>
  );
};

export default DarkToggle;