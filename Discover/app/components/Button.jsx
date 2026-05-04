import React from "react";

const Button = ({ text, onClick, color = "blue" }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color, color: 'white', padding: '10px' }}
        >
            {text}
        </button>
    );
};
export default Button;
