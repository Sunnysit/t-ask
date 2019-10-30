import React from 'react'
import TeamMember from './TeamMember';

const ListMembers = () => {
    const teamMembers = [
        //Social Array property not used for now
        {
            name: 'Karla Lopez',
            role: 'Project Manager/ Front-End Developer',
            description: 'Graduate in 3D animation. Familiar with modern JavaScript frameworks like Vue.js' +
                    ' and  React.js. Will be in charge of organizing the team, making sure everything' +
                    ' is on track. As a  front-end developer will work on the implementation of the d' +
                    'esign for the website.',
            socials: [
                'LinkedIn', 'GitHub'
            ],
            link: [
                "https://www.linkedin.com/in/karlalopez3d/", "https://github.com/KarlaLGA"
            ],
            socialArray: [
                {
                    social: 'LinkedIn',
                    link: 'https://www.linkedin.com/'
                }, {
                    social: 'Github',
                    link: 'https://github.com/'
                }
            ]
        }, {
            name: 'Sunny Xue',
            role: 'Lead Developer/ Full-Stack Developer',
            description: 'Graduate in GIS(Geographic Information System). 2+ years of front-end developmen' +
                    't experience with HTML, CSS, and JavaScript. Familiar with modern javascript fra' +
                    'meworks like React.js and Vue.js. Will work on the front-end and back-end of the' +
                    ' application, while supporting and coordinating the development team.',
            socials: [
                'LinkedIn', 'GitHub'
            ],
            link: [
                "https://www.linkedin.com/in/sunnyxue/", 'https://github.com/Sunnysit'
            ],
            socialArray: [
                {
                    social: 'LinkedIn',
                    link: 'https://www.linkedin.com/'
                }, {
                    social: 'Github',
                    link: 'https://github.com/'
                }
            ]
        }, {
            name: 'Juan Tirado',
            role: 'Full-Stack Developer',
            description: 'Graduate in Science (Animal Science) and experienced in statistics and genetic r' +
                    'esearch. As a full-stack developer focused on data analytics, will work on the b' +
                    'ack-end and assist the implementation of the design for the website.',
            socials: [
                'LinkedIn', 'GitHub'
            ],
            link: [
                "https://www.linkedin.com/in/juanfernandotirado/", 'https://github.com/juanfernandotirado'
            ],
            socialArray: [
                {
                    social: 'LinkedIn',
                    link: 'https://www.linkedin.com/'
                }, {
                    social: 'Github',
                    link: 'https://github.com/'
                }
            ]
        }, {
            name: 'Rafael Montenegro',
            role: 'Full-Stack Developer',
            description: 'Graduate in Computer Information Systems and Android developer with 4+ years of ' +
                    'experience. Is familiar with modern web frameworks such as React.js. Will be imp' +
                    'lementing both front-end and back-end aspects of the application. ',
            socials: [
                'LinkedIn', 'GitHub'
            ],
            link: [
                "https://www.linkedin.com/in/rafaelmonte", 'http://github.com/rafaelgsm'
            ],
            socialArray: [
                {
                    social: 'LinkedIn',
                    link: 'https://www.linkedin.com/'
                }, {
                    social: 'Github',
                    link: 'https://github.com/'
                }
            ]
        }, {
            name: 'Luis Eduardo Consolo',
            role: 'Lead Designer/ UX and UI Designer',
            description: 'Graduate in Graphic Design worked in the publishing field for 3+ years, studied ' +
                    'drawing,  watercolor and mixed arts. Will be in charge of approving the UI and s' +
                    'upervise UX,  guaranteeing that the final product is consistent with the design ' +
                    'proposed.',
            socials: [
                'LinkedIn', 'Behance'
            ],
            link: [
                "https://www.linkedin.com/in/educonsolo/", 'https://www.behance.net/educonsolo'
            ],
            socialArray: [
                {
                    social: 'LinkedIn',
                    link: 'https://www.linkedin.com/'
                }, {
                    social: 'Behance',
                    link: 'https://www.behance.net/'
                }
            ]
        }, {
            name: 'Diana Gunawan',
            role: 'UX and UI Designer/ Business Strategist',
            description: 'Graduate in Business majoring in Marketing. With 5+ years of experience in servi' +
                    'ce and fast-moving consumer goods industry. Enthusiastic about UI & UX, will be ' +
                    'responsible for contributing to the design team by providing the elements needed' +
                    ' for the project.',
            socials: [
                'LinkedIn', 'Behance'
            ],
            link: [
                "https://www.linkedin.com/in/dianagunawan/", 'https://www.behance.net/dianagunawan'
            ],
            socialArray: [
                {
                    social: 'LinkedIn',
                    link: 'https://www.linkedin.com/'
                }, {
                    social: 'Behance',
                    link: 'https://www.behance.net/'
                }
            ]
        }, {
            name: 'Satnam Singh Sandhu',
            role: 'UX and UI Designer/Front End Developer',
            description: 'Graduate in Computer Science. Able to complete layout designs and front end codi' +
                    'ng for a  website. Desire to learn from any source, either from school programs ' +
                    'or online. Will be responsible for assisting the design team.',
            socials: [
                'LinkedIn', 'Behance'
            ],
            link: [
                "https://www.linkedin.com/in/satnam-sandhu-73492a196/", 'https://www.behance.net/satnamsingh4'
            ],
            socialArray: [
                {
                    social: 'LinkedIn',
                    link: 'https://www.linkedin.com/'
                }, {
                    social: 'Behance',
                    link: 'https://www.behance.net/'
                }
            ]
        }
    ]

    return (
        <div className="team-members">
            {teamMembers.map(teamMember => (<TeamMember key={teamMember.name} teamMember={teamMember}/>))
}
        </div>
    );

}

export default ListMembers;