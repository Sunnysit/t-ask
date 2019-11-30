import React from 'react';
import {Link} from 'react-router-dom';

const CallToActionSection = () => {
    return ( 
    <section className="other-section">
        <div className="section-description-container">
        <p className="section-description">Interested in learning more about your favorite language?
        </p>
        <p className="section-description">
        Visit our articles page to see interesting articles, or events page to see related events.
        </p>
        </div>
        <div className="links-container">
        <Link className="btn-outline" to="/articles">Articles</Link>
        <Link className="btn-outline" to="/events">Events</Link>
        </div>
    </section> );
}
 
export default CallToActionSection;