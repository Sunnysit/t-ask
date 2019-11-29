import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import Prism from 'prismjs';
import "../../library/prism.css";
import Test from './Test';

const RandomQuote = () => {

    
    const [randomQuote, setRandomQuote] = useState('');
    const [randomCode, setRandomCode] = useState({});
    const [isCode, setIsCode] = useState(false);
    
    useEffect(() => {

        Prism.highlightAll();

        Axios.get('https://t-ask-api.herokuapp.com/api/quotes')
        .then(result => {
            //console.log(result.data);
            let randomArrayIndex = Math.floor(Math.random()*9);
            //console.log(randomArrayIndex);
            let randomArray = result.data[randomArrayIndex];
            //console.log(randomArray);
            let randomLanguage = randomArray.quotesArray.length;
            //console.log(`length of array ${randomLanguage}`);
            let randomFunQuoteIndex = Math.floor(Math.random()* randomLanguage);
            let randomFunQuote = randomArray.quotesArray[randomFunQuoteIndex];

            if (randomFunQuote.type === "text") {
                setRandomQuote(randomFunQuote.quote);
            }
            else {
                //console.log(randomArray);
                let language = randomArray.language.name.toLowerCase();
                if(language === 'c++') {
                    language = 'cpp'
                }
                else if(language === 'c#') {
                    language = 'csharp'
                }
                else if(language === 'objective-c') {
                    language = 'objectivec'
                }
                console.log(language);
                let quote = randomFunQuote.quote;
                let index = quote.indexOf(":");
                let text = quote.slice(0, (index+1));
                let code = quote.slice(index+1);
                //console.log(text);
                //console.log(code);
                let randomCode = {
                    text: `${text}`,
                    code: code,
                    language: language
                }
                setRandomCode(randomCode);
                setIsCode(true);
            }
        })
    },[])




    return (
       <div className="random-quote">
           <h3>FUN FACT:</h3>
           {!isCode ? (
                <p>{randomQuote}</p>
           ) : (
            <Test code={ randomCode}/>
           )}   
       </div> 
    )
}

export default RandomQuote;