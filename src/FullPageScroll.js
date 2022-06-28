import React from "react";
import ReactFullpage, { pluginWrapper } from "@fullpage/react-fullpage";
import HomeCard from "./homeSect.js"

const FullPageScroll = () => (
  <ReactFullpage
    pluginWrapper={pluginWrapper}
    scrollingSpeed={1000} /* Options here */
    scrollHorizontally={true} /* Because we are using the extension */
    render={({ state, fullpageApi }) => {
      return (
        <>
        <ReactFullpage.Wrapper>

          <div className="section home" data-anchor = "section1">
        
          </div>

          <div className="section skills" data-anchor = "section2">
            <p>Section 2</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>

          <div className="section work" data-anchor = "section3">
            <p>Section 3</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>

          <div className="section contact" data-anchor = "section4">
            <p>Section 4</p>
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
