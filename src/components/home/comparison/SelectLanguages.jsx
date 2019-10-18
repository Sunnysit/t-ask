import React, {useState} from 'react';

const SelectLanguage = () => {
    const languages = [
        'python',
        'java',
        'javascript',
        'c#',
        'php',
        'c++',
        'r',
        'objective-c',
        'swift',
        'matlab',
        'typescript',
        'kotlin',
        'ruby',
        'visual basic',
        'go',
        'rust'
    ]
    
    const [displayDropDown, setDisplayDropDown] = useState(true);
    
    
    
    let handleDropDown = () => {
        setDisplayDropDown(!displayDropDown)
    }
    
    let optionsLanguages = languages.map(language => <li key={language} value={language}>{language}</li>)
    
    return (
        <div className="select-language-body">
            <button onClick={handleDropDown}>Languages</button>
            {!displayDropDown ? (
                <div className="drop-down active">
                    <ul className="languages">
                    { optionsLanguages }
                    </ul>
                </div>
            ) : (
                <div className="drop-down"></div>
            )}
            
            
        </div>
    )
}

export default SelectLanguage