import React from "react";
import FullPageScroll from "./FullPageScroll.js";
import "./main.scss";
import ToggleNav from "./toggleNav.js"


const App = () => {
  return (
    <div>
      <ToggleNav/>
 
      <FullPageScroll />
     
    </div>
  );
};

export default App;
