import React from 'react';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '10px', width: '200px' }}>
            <img src={imageUrl} alt={title} style={{ width: '100%' }} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};
export default Card;
