import React, { useEffect } from 'react';
import Prism from 'prismjs';

const Test = (props) => {

    let code = props.code;

    useEffect(() => {
        Prism.highlightAll();
    }, [])
    return (
        <div className="test">
            <p>{code.text}</p>
            <pre><code className="language-javascript">{code.code}</code></pre>
            
        </div>
    )
}

export default Test;