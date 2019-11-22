import React from 'react';
import Popup from 'reactjs-popup';


const EventsPopup = () => {
    return(
        <Popup trigger={<p>Favorite Events</p>} on="hover" position="top left" className="coming-soon">
      <div>
        Coming soon!
      </div>
  </Popup>

    )
}

export default EventsPopup