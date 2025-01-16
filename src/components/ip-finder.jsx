import React, { useState } from 'react';

const IpFinder = () => {
    const [ip, setIp] = useState('');
    const [error, setError] = useState('');

    const getIp = () => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                setIp(data.ip);
                setError('');
            })
            .catch(err => {
                console.error('Error fetching IP address:', err);
                setError('Failed to fetch IP address.');
                setIp('');
            });
    };

    return (
        <div>
            <h1>Your IP Address</h1>
            <button onClick={getIp}>Get My IP</button>
            {ip && <p>Your IP address is: {ip}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default IpFinder;