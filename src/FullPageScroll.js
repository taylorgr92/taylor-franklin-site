import React from "react";
import ReactFullpage, { pluginWrapper } from "@fullpage/react-fullpage";
import anchors from "./anchors";

const FullPageScroll = () => (
  <ReactFullpage
    pluginWrapper={pluginWrapper}
    scrollingSpeed={1000} /* Options here */
    anchors={anchors}
    navigationTooltips={anchors}
    touchSensitivity={15}
    navigation={true}
    /* Because we are using the extension */
    render={({ state, fullpageApi }) => {
      return (
        <>
          <ReactFullpage.Wrapper>
            <div className="section home" data-anchor="Home">
            <h1>Home</h1>
            </div>
            <div className="section skills" data-anchor="Skills">
            <h1>Skills</h1>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>

            <div className="section projects" data-anchor="Projects">
              <h1>Projects</h1>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>

            <div className="section contact" data-anchor="Contact">
              <h1>Contact</h1>
              <button onClick={() => fullpageApi.moveSectionUp()}>
                Click me to move down
              </button>
            </div>
          </ReactFullpage.Wrapper>
        </>
      );
    }}
  />
);

export default FullPageScroll;
