import React from 'react'

const TeamMember = ({ teamMember }) => {
    return(
        <div className="teamMemberCard">
            <h2>{ teamMember.name }</h2>
            <p className="role">{ teamMember.role }</p>
            <p>{ teamMember.description }</p>
            <a href={ teamMember.link[0] }>{ teamMember.socials[0] }</a>
            <a href={ teamMember.link[1] }> {teamMember.socials[1] }</a>      
        </div>
    )
}
 
export default TeamMember;