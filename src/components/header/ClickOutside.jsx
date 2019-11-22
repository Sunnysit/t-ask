import React, {useRef, useEffect} from "react";
import {useDispatch} from 'react-redux';

import BurgerMenu from './BurgerMenu';

/*Code from Ben Bud
https://stackoverflow.com/questions/32553158/detect-click-outside-react-component*/ 

function ClickOutside(ref) {

    const dispatch = useDispatch();

    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            //console.log("You clicked outside of me!");
            dispatch({type: "CLOSE_BURGER"});
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
}

export default function ClickAlert(props) {
    const wrapperRef = useRef(null);
    ClickOutside(wrapperRef);

    return <div ref={wrapperRef}>
        <BurgerMenu/>
    </div>;
}