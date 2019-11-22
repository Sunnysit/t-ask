import React from 'react';
import Popup from 'reactjs-popup';


const ClickOutsideEvents = () => {
    return(
        <Popup trigger={<p>Favorite Articles</p>}position="top left" className="coming-soon">
 
          <div>
        Coming soon!
      </div>

      
  </Popup>

    )
}

export default ClickOutsideEvents