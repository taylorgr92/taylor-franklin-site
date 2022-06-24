import React from "react";
import ReactFullpage ,{pluginWrapper} from "@fullpage/react-fullpage";


const FullPageScroll = () => (
    <ReactFullpage
      pluginWrapper = {pluginWrapper}
  
    
      scrollingSpeed = {1000} /* Options here */
      scrollHorizontally = {true}  /* Because we are using the extension */
    
  
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <p>Section 1 </p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="section">
              <p>Section 2</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="section">
              <p>Section 3</p>
              <button onClick={() => fullpageApi.moveSectionUp()}>
                Click me to move up
              </button>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

export default FullPageScroll;
