import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UnsplashRandomImage = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get('https://api.unsplash.com/photos/random', {
                    headers: {
                        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
                    }
                });
                setImageUrl(response.data.urls.regular);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchImage();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading image: {error.message}</p>;

    return (
        <div>
            <img src={imageUrl} alt="Random Unsplash" style={{ width: '100%', height: 'auto' }} />
        </div>
    );
};

export default UnsplashRandomImage;
