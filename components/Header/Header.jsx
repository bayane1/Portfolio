import React, { use } from 'react';
import { FormattedMessage } from 'react-intl';
import Menu from '../Fragments/Menu';
import { useLocale } from '../LocalProvider';
import {useTheme} from '../ThemeProvider';

const Header = () => {
  let [theme, setTheme] = useTheme();
  const handeleThemeChange = (event) => {
    setTheme(event.target.checked ? 'dark' : 'light');
  }

  let [local, setLocal] = useLocale();
  const handeleLocalChange = (event) => {
    setLocal(event.target.checked ? 'en' : 'fr');
  }
  return (
    <div>
      <h1 >
        <FormattedMessage id= "app.header.titre"/>
      </h1>
      <Menu></Menu>
      <label>
        Theme:
        <input type = "checkbox" checked= {theme == 'dark'}
        onChange = {handeleThemeChange}>

        </input>
      </label>
      {theme}

      <label>
        Langue:
        <input type = "checkbox" checked= {local == 'en'}
        onChange = {handeleLocalChange}>

        </input>
      </label>
      {local}
    </div>
  );
};

export default Header;
