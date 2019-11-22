import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Settings from '../components/user/DashBoard/Settings';
import JobsSection from '../components/user/DashBoard/JobsSection';
import LanguagesSection from '../components/user/DashBoard/LanguagesSection';
import LogOut from '../components/user/DashBoard/LogOut';
import Axios from 'axios';

const UserDashboard = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.userInfo);

    const languages = useSelector(state => state.languages.languages);

    let userLanguagesId = user.favoriteLanguages;

    let userLanguages;

    if (userLanguagesId) {
        userLanguages = languages.filter(language => userLanguagesId.find(lang => lang === language.languageId));

    }
    //const [response, setResponse] = useState('initialState')
    useEffect(() => {
        dispatch({type: "USER_SIGNUP"});
        Axios.defaults.headers.common['x-access-token'] = localStorage.getItem('userData');

        Axios
            .get('https://t-ask-api.herokuapp.com/api/user')
            .then(res => {
                console.log(res.data);
                dispatch({type: "USER_INFO", payload: res.data})
            })
            .catch(error => {
                console.log(error)
            })

            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="user-profile">
            <div className="hero-profile hero">
                <h2 className="page-title">Profile</h2>
            </div>

            <div className="mobile">
                <div className="user-profile-header card">
                    <h1>Welcome {user.name}!</h1>
                    <div className="user-profile-options">

                        <div className="user-profile">
                            <img src="./assets/signup/default-profile-picture.png" alt=""/>
                            <p>Edit Profile</p>
                        </div>
                        <div className="favorite-languages">
                        <p className="comparison-text">Favorite Languages</p>
                            {userLanguages
                                ? (
                                    <ul className="selected-languages">
                                        {userLanguages.map((languages, index) => <li key={index}>{languages.languageName}</li>)}

                                    </ul>
                                )
                                : (
                                    <ul></ul>
                                )}
                        </div>
                        
                    </div>
                    <Settings/>
                </div>

                <div className="user-profile-body card">
                    <div className="user-profile-content">
                        <LanguagesSection/>
                        <JobsSection/>
                        <LogOut/>
                    </div>
                </div>
            </div>

            <div className="desktop card">
                <h1>Welcome {user.name}!</h1>
                <div className="user-profile-body">
                    <Settings/>
                    <div className="user-profile-content">
                        <LanguagesSection/>
                        <JobsSection/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserDashboard;