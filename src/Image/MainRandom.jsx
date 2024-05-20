import React from 'react';

const SpecificUnsplashImage = () => {
    const imageUrl = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'; // Belirli resmin doğrudan URL'si

    return (
        <div>
            <img className='h-screen object-fill' src={imageUrl} alt="Specific Unsplash" style={{ width: '100%',  }} />
        </div>
    );
};

export default SpecificUnsplashImage;
