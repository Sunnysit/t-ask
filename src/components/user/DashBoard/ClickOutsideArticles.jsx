import React from 'react';
import Popup from 'reactjs-popup';


const ClickOutsideArticles = () => {
    return(
        <Popup trigger={<p>Favorite Articles</p>}position="top left" className="coming-soon" closeOnDocumentClick>
 
          <div>
        Coming soon!
      </div>

      
  </Popup>

    )
}

export default ClickOutsideArticles