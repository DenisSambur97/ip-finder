import React, { useState } from 'react';
import axios from 'axios';

const IpGeolocation = () => {
    const [ip, setIp] = useState('');
    const [location, setLocation] = useState(null);
    const [error, setError] = useState('');

    const getIpAndLocation = () => {
        // Получаем IP-адрес
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                setIp(data.ip);
                // Используем IPinfo API для получения геолокации
                return axios.get(`https://ipinfo.io/${data.ip}/json?token=4efbe131c437ba`);
            })
            .then(response => {
                setLocation(response.data);
                setError('');
            })
            .catch(err => {
                console.error('Error fetching IP or location:', err);
                setError('Failed to fetch IP or location.');
                setIp('');
                setLocation(null);
            });
    };

    return (
        <div>
            <h1>Your IP Geolocation</h1>
            <button onClick={getIpAndLocation}>Get My Location</button>
            {ip && <p>Your IP address is: {ip}</p>}
            {location && (
                <div>
                    <h2>Location Details:</h2>
                    <p>City: {location.city}</p>
                    <p>Region: {location.region}</p>
                    <p>Country: {location.country}</p>
                    <p>Postal: {location.postal}</p>
                    <p>Location: {location.loc}</p>
                    <p>Organization: {location.org}</p>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default IpGeolocation;