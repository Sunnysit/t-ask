import React from 'react';
import Popup from 'reactjs-popup';


const ArticlesPopup = () => {
    return(
        <Popup trigger={<p>Favorite Articles</p>} on="hover" position="top left" className="coming-soon" closeOnDocumentClick>
        {close => (
          <div onClick={ close }>
        Coming soon!
      </div>
        )}
      
  </Popup>

    )
}

export default ArticlesPopup