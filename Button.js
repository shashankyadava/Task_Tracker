import PropTypes from "prop-types";
import React from 'react';

const Button = ({color, text, onClick})=>{
    return(
        <button onClick={onClick} style={{backgroundColor: color}} className="btn">
            {text}
        </button>
    )
}

Button.defautProps = {
    color: "steelblue",
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Button;