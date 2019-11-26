import React from 'react';
import Popup from 'reactjs-popup';


const LearnMore = () => {
    return(
        <Popup trigger={<div className="learn-more-symbol"><p>&#63;</p></div>} position="top right" className="learn-more" closeOnDocumentClick>
        {close => (
          <div className="modal">
            <button onClick={close} className="close popup-text">&times;</button>
            The list above shows the top 3 ranks of the programming languages and job categories. The programming languages are based on Google Trends API. While the job categories are based on LinkUp data.      
          </div>
        )}
      
  </Popup>

    )
}

export default LearnMore