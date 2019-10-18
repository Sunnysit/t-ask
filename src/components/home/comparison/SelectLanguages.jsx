import React from 'react';

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

let optionsLanguages = languages.map(language => <option key={language} value={language}>{language}</option>)

const SelectLanguage = () => {
    return (
        <div className="">
            <select name="" id="">
                { optionsLanguages }
            </select>
        </div>
    )
}

export default SelectLanguage