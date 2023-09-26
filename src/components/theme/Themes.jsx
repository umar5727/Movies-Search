import React from "react";
import "./Themes.css";
const Themes = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    
    localStorage.setItem('selectedTheme','dark');

  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    
    localStorage.setItem('selectedTheme','light');
  };

  const selectedTheme=localStorage.getItem('selectedTheme');
  if(selectedTheme === 'dark'){
    setDarkMode();
    
  }

  const toggleTheme = (e) => {
    e.target.checked ? setDarkMode() : setLightMode();
  };
//   toggleTheme();
  return (
    <div>
      <div className="theme_wrapper">
        <label htmlFor="theme" className="theme_container">
          <input
            id="theme"
            type="checkbox"
            onChange={toggleTheme}
            defaultChecked={selectedTheme === 'dark'}
          />
        <label id="themeCircle" htmlFor="theme"  className="circle"></label>
        </label>
        <div className="theme_name">
          <span>darks</span>
        </div>
      </div>
    </div>
  );
};

export default Themes;
