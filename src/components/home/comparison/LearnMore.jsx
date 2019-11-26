import React from 'react';
import Popup from 'reactjs-popup';


const LearnMore = () => {
    return(
        <Popup trigger={<div className="learn-more-symbol"><p>&#63;</p></div>} position="top right" className="learn-more" closeOnDocumentClick>
        {close => (
          <div className="modal">
          <button onClick={close} className="close popup-text">&times;</button>
          The graphs above compare how a programming language behaves in two different aspects, time and location. On the time graph, the usage of the language is based on the Github Repository count. On the location graph, the usage of language is based on Google Trends API. Both graphs of demand for a language are based on LinkUp. The location graphs are based on percentage taking the most popular language as 100%.
      </div>
        )}
      
  </Popup>

    )
}

export default LearnMore