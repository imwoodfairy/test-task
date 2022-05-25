import React from 'react'
import './citySelector.scss'

import { useState } from 'react'
import { useEffect } from 'react';
import { fetchCities } from '../../API/CityService';


const CitySelector = () => {

    const [cities, setCities] = useState([]);
    const [query, setQuery] = useState('');
    const [selectedCity, setSelectedCity] = useState({});
    const [input, setInput] = useState('');


    useEffect(() => {
        fetchCities(query).then(data => { setCities(data.result) })
    }, [query])


    return (

        <div className="city-selector container">

            <input
                className='city-selector__input input'
                placeholder='Введите город'
                type="text"
                onChange={(e) => { setQuery(e.target.value); setInput(e.target.value) }}
                value={input}

            />
            <ul className='city-selector__city-list city-list'
                style={!query ? { 'display': 'none' } : { 'display': 'block' }}>
                {cities.map(city =>
                    <li key={city.id}
                        onClick={() => { setSelectedCity(city.name); setInput(city.name) }}>
                        {city.name}
                    </li>
                )}
            </ul>

        </div>

    )
}

export default CitySelector;