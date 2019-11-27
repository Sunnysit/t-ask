import React from 'react'
import TeamMember from './TeamMember';

const ListMembers = () => {
    const teamMembers = [
        //Social Array property not used for now
        {
            name: 'Karla Lopez',
            role: 'Project Manager & Front-End Developer',
            description: 'Graduate in 3D animation. Familiar with modern JavaScript frameworks like Vue.js and React.js. In charge of organizing the team, making sure everything is on track. As a front-end developer works on the functionality and implementation of the design for the website.',
            socials: [
                'LinkedIn', 'GitHub'
            ],
            link: [
                "https://www.linkedin.com/in/karlalopez3d/", "https://github.com/KarlaLGA"
            ],
            images: ["./assets/photos-team/Karla.JPG", "./assets/photos-team/Karla_Funny.JPG"],
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
            role: 'Lead Full-Stack Developer',
            description: 'Graduate in GIS(Geographic Information System). 2+ years of front-end development. Familiar with modern Javascript frameworks like React.js and Vue.js. Works on the front-end and back-end of the application, while coordinating the development team.',
            socials: [
                'LinkedIn', 'GitHub'
            ],
            link: [
                "https://www.linkedin.com/in/sunnyxue/", 'https://github.com/Sunnysit'
            ],
            images: ["./assets/photos-team/Sunny.JPG", "./assets/photos-team/Sunny_Funny.JPG"],
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
            description: 'Graduate in Science (Animal Science) and experience in statistics using Python and with genetic and molecular biology research. As a full-stack developer focuses on data analytics, works on the back-end with the database and server side using Node.js and Express.',
            socials: [
                'LinkedIn', 'GitHub'
            ],
            link: [
                "https://www.linkedin.com/in/juanfernandotirado/", 'https://github.com/juanfernandotirado'
            ],
            images: ["./assets/photos-team/Juan.JPG", "./assets/photos-team/Juan_Funny.JPG"],
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
            description: 'Graduate in Computer Information Systems and Android developer with 4+ years of experience. Is familiar with modern web frameworks such as React.js and Express.js. Implements the back-end of the application, while assisting the front-end.',
            socials: [
                'LinkedIn', 'GitHub'
            ],
            link: [
                "https://www.linkedin.com/in/rafaelmonte", 'http://github.com/rafaelgsm'
            ],
            images: ["./assets/photos-team/Rafael.JPG", "./assets/photos-team/Rafael_Funny.JPG"],
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
            role: 'Lead UX/UI Designer',
            description: 'Graduate in Graphic Design worked in the publishing field for 3+ years, studied drawing, watercolor and mixed arts. In charge of approving the UI and supervising UX, guaranteeing that the final product is consistent with the design proposed.',
            socials: [
                'LinkedIn', 'Behance'
            ],
            link: [
                "https://www.linkedin.com/in/educonsolo/", 'https://www.behance.net/educonsolo'
            ],
            images: ["./assets/photos-team/Luis.JPG", "./assets/photos-team/Luis_Funny.JPG"],
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
            role: 'UX/UI Designer & Business Strategist ',
            description: 'Graduate in Business with a major in Marketing. Has 5+ years of experience in marketing and retail industry. Enthusiastic about UI & UX, responsible for contributing to the design team by providing the elements needed for the project. ',
            socials: [
                'LinkedIn', 'Behance'
            ],
            link: [
                "https://www.linkedin.com/in/dianagunawan/", 'https://www.behance.net/dianagunawan'
            ],
            images: ["./assets/photos-team/Diana.JPG", "./assets/photos-team/Diana_Funny.JPG"],
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
            role: 'UX/UI Designer & Front-End Developer',
            description: 'Graduate in Computer Science and Mathematics. Able to complete layout designs and front-end coding for websites. Desire to learn from any source, either from school programs or online. Responsible for assisting the design team. ',
            socials: [
                'LinkedIn', 'Behance'
            ],
            link: [
                "https://www.linkedin.com/in/satnam-sandhu-73492a196/", 'https://www.behance.net/satnamsingh4'
            ],
            images: ["./assets/photos-team/Satnam.JPG", "./assets/photos-team/Satnam_Funny.JPG"],
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
        <div className="team-members card">
            {teamMembers.map(teamMember => (<TeamMember key={teamMember.name} teamMember={teamMember}/>))
}
        </div>
    );

}

export default ListMembers;