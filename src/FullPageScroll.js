import React from "react";
import ReactFullpage, { pluginWrapper } from "@fullpage/react-fullpage";

import HomeSlide from "./homeSect";
import anchors from "./anchors";

const FullPageScroll = () => (
  <ReactFullpage
    pluginWrapper={pluginWrapper}
    scrollingSpeed={1000}
    anchors={anchors}
    navigationTooltips={anchors}
    touchSensitivity={15}
 
    render={({ state, fullpageApi }) => {
      return (
        <>
          <ReactFullpage.Wrapper>
            <div className="section home" data-anchor="Home">
              <HomeSlide />
            </div>

            <div className="section skills" data-anchor="Skills">
              <skillSect />
            </div>

            <div className="section projects" data-anchor="Projects">
              <projectSect />
            </div>

            <div className="section contact" data-anchor="Contact">
              <contactSect />
            </div>
          </ReactFullpage.Wrapper>
        </>
      );
    }}
  />
);

export default FullPageScroll;
