import React from 'react'
import TeamMember from './TeamMember';


const ListMembers = () => {
    const teamMembers = [
        {name: 'Karla Lopez',
        role: 'Project Manager/ Front-End Developer',
        description: 'Graduate in 3D animation. Familiar with modern JavaScript frameworks like Vue.js and  React.js. Will be in charge of organizing the team, making sure everything is on track. As a  front-end developer will work on the implementation of the design for the website.',
        socials: ['LinkedIn','Github'], 
        link: ["https://www.linkedin.com/", 'https://github.com/']
        },
        {name: 'Sunny Xue',
        role: 'Lead Developer/ Full-Stack Developer',
        description: 'Graduate in GIS(Geographic Information System). 2+ years of front-end development experience with HTML, CSS, and JavaScript. Familiar with modern javascript frameworks like React.js and Vue.js. Will work on the front-end and back-end of the application, while supporting and coordinating the development team.',
        socials: ['LinkedIn', 'GitHub'],
        link:["https://www.linkedin.com/", 'https://github.com/']
        },
        {name: 'Juan Tirado',
        role: 'Full-Stack Developer',
        description: 'Graduate in Science (Animal Science) and experienced in statistics and genetic research. As a full-stack developer focused on data analytics, will work on the back-end and assist the implementation of the design for the website.',
        socials: ['LinkedIn', 'GitHub'],
        link: ["https://www.linkedin.com/", 'https://github.com/']
        },
        {name: 'Rafael Montenegro',
        role: 'Full-Stack Developer',
        description: 'Graduate in Computer Information Systems and Android developer with 4+ years of experience. Is familiar with modern web frameworks such as React.js. Will be implementing both front-end and back-end aspects of the application. ',
        socials: ['LinkedIn', 'GitHub'],
        link: ["https://www.linkedin.com/", 'https://github.com/']
        },
        {name: 'Luis Eduardo Consolo',
        role: 'Lead Designer/ UX and UI Designer',
        description: 'Graduate in Graphic Design worked in the publishing field for 3+ years, studied drawing,  watercolor and mixed arts. Will be in charge of approving the UI and supervise UX,  guaranteeing that the final product is consistent with the design proposed.',
        socials: ['LinkedIn', 'Behance'],
        link: ["https://www.linkedin.com/", 'https://www.behance.net/']
        },
        {name: 'Diana Gunawan',
        role: 'UX and UI Designer/ Business Strategist',
        description: 'Graduate in Business majoring in Marketing. With 5+ years of experience in service and fast-moving consumer goods industry. Enthusiastic about UI & UX, will be responsible for contributing to the design team by providing the elements needed for the project.',
        socials: [ 'LinkedIn', 'Behance'],
        link: ["https://www.linkedin.com/",'https://www.behance.net/']
        },
        {name: 'Satnam Singh',
        role: 'UX and UI Designer',
        description: 'Graduate in Computer Science. Able to complete layout designs and front end coding for a  website. Desire to learn from any source, either from school programs or online. Will be responsible for assisting the design team.',
        socials: [ 'LinkedIn', 'Behance'],
        link: ["https://www.linkedin.com/",'https://www.behance.net/']
        }
    ]

    const listTeamMembers = teamMembers.map(teamMember => (
        <TeamMember key={teamMember.name} teamMember={teamMember} teamMemberSocials = {teamMember.socials}/>
    ))
    return ( 
        <div className="teamMembers">
            { listTeamMembers }
        </div>
     );

    
}
 
export default ListMembers;