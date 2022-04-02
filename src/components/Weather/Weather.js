import React, { useEffect, useState } from 'react'
import './Weather.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


function Weather() {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Agartala");

    const changeevent = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    };

    const fetchData = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9e33ed9168af95b45ab8825e5f43428d`
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setCity(data.main);
    };


    useEffect(() => {

        fetchData();
    }, [search])
    return (
        <>
            <div className='main-box'>
                <h1 className='title'><span className='titlespan'>Weather</span>Zone</h1>
                <div className='input-box'>
                    <input
                        type="search"
                        className='inputfield'
                        value={search}
                        onChange={changeevent}
                    />
                </div>
                {!city ? (
                    <p className='Nofound'>No Data Found</p>
                ) : (
                    <div>
                        <div className='info'>
                            <h2 className='location'> <FontAwesomeIcon className="icon" icon={solid('location-dot')} /> {search}</h2>
                            <h1 className='temp'>{city.temp}°Cel</h1>
                            <h3 className='tempmin_max'> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
                        </div>
                        <div className='wave1'></div>
                        <div className='wave2'></div>
                        <div className='wave3'></div>
                    </div>
                )}

            </div>
        </>
    )
}

export default Weather;