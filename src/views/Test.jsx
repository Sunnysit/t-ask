import React, { useEffect} from 'react';
import Prism from 'prismjs';
import "../library/prism.css";

const Test = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, [])
    return (
        <div className="test languages">
            <pre><code className="language-javascript">console.log("Hello world!");</code></pre>
            
        </div>
    )
}

export default Test;