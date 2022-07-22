import React from "react";
import ReactFullpage, { pluginWrapper } from "@fullpage/react-fullpage";
import HomeSlide from "./homeSect";
import SkillSect from "./skillSect.js";
import ContactSect from "./contactSect.js"
import anchors from "./anchors";
import "./css/main.scss";

const App = () => (
  <ReactFullpage
    pluginWrapper={pluginWrapper}
    scrollingSpeed={1000}
    anchors={anchors}
    navigationTooltips={anchors}
    touchSensitivity={15}
    navigation={true}
    render={({ state, fullpageApi }) => {
      return (
    
          <ReactFullpage.Wrapper>
            <div className="section home" data-anchor="Home">
              <HomeSlide />
            </div>

            <div className="section skills" data-anchor="Skills">
         <SkillSect/>
            </div>

            <div className="section projects" data-anchor="Projects"></div>

            <div className="section contact" data-anchor="Contact"><ContactSect/></div>
          </ReactFullpage.Wrapper>
       
      );
    }}
  />
);

export default App;
