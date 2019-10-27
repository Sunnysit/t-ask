import React, {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';

const Top3Languages = () => {

    const [top3Languages,setTop3Languages ] = useState([])

    const languagesStateUsa = useSelector(state => state.languages.languageTrendingDataUsa);
    const languagesStateCanada = useSelector(state => state.languages.languageTrendingDataCanada);

    

    useEffect(() => {
        console.log(languagesStateUsa);
        console.log(languagesStateCanada);
        let top3LangArray = [];
        if(languagesStateUsa.length>=3)
        {
            for(let i=0;i<3;i++)
            {
                top3LangArray.push(languagesStateUsa[i]);
            }
            setTop3Languages(top3LangArray);
        }
       
    },[languagesStateUsa,languagesStateCanada]);

    return (
        <section className="tending-language-section">

            <div className="trending-language-container">
                <ul className="trending-language-list">
                    {top3Languages.map(lang => {
                        return <li key={lang.languageId} className="tending-language-item">
                            <p className="logo-name">{lang.languageName}</p>
                            <p className="logo-container">
                                <img className="language-logo" src="/assets/language-icon/csharp.png" alt={lang.languageName}/>
                            </p>
                            <p className="language-description">{lang.languageDescription}</p>
                        </li>
                    })
}
                </ul>
            </div>
        </section>

    );
}

export default Top3Languages;