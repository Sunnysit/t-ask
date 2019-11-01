import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const TeamMember = (props) => {
    let teamMember = props.teamMember;

    let socialIcon = teamMember.socials[1];
    let socialIconStream;

    if (socialIcon === 'GitHub') {
        socialIconStream = true;
    } else {
        socialIconStream = false;
    }

    return (
        <div className="team-member-card">
            <div className="image-container">
            <img src={teamMember.images[0]} alt=""/>
            </div>
            <h2>{teamMember.name}</h2>
            <p className="role">{teamMember.role}</p>
            <p>{teamMember.description}</p>

            <a href={teamMember.link[0]} target="blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/></a>

            {!socialIconStream
                ? (
                    <a href={teamMember.link[1]} target="blank"><FontAwesomeIcon icon={['fab', 'behance-square']} size="2x"/></a>
                )
                : (
                    <a href={teamMember.link[1]} target="blank"><FontAwesomeIcon icon={['fab', 'github-square']} size="2x"/></a>

                )}

        </div>
    )
}

export default TeamMember;