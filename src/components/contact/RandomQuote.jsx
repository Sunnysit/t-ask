import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const RandomQuote = () => {

    
    const [randomQuote, setRandomQuote] = useState('');

    
    useEffect(() => {

        Axios.get('https://t-ask-api.herokuapp.com/api/quotes')
        .then(result => {
            //console.log(result.data);
            let randomArrayIndex = Math.floor(Math.random()*9);
            //console.log(randomArrayIndex);
            let randomArray = result.data[randomArrayIndex];
            //console.log(randomArray);
            let randomLanguage = randomArray.quotesArray.length - 1;
            //console.log(`length of array ${randomLanguage}`);
            let randomFunQuoteIndex = Math.floor(Math.random()* randomLanguage);
            let randomFunQuote = randomArray.quotesArray[randomFunQuoteIndex].quote;
            //console.log(randomFunQuote);
            setRandomQuote(randomFunQuote);
            console.log(randomQuote);
        })
    },[])
    return (
       <div className="random-quote">
           <p>{randomQuote}</p>

       </div> 
    )
}

export default RandomQuote;