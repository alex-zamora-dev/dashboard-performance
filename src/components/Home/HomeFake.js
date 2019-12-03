import React, { useState } from 'react';
import Test from '../Test/Test';
import './Home.css';

const Home = () => {

    const [urls, setUrls] = useState([
        {name: 'home', url: 'https://www.liverpool.com.mx/tienda/home'},
        // {name: 'plp', url: 'https://www.liverpool.com.mx/tienda/casual/cat610106'},
        // {name: 'pdp', url: 'https://www.liverpool.com.mx/tienda/pdp/pantal%C3%B3n-casual-jbe-corte-regular/1080876890'}
    ]);

    return (
        <div className="container home">
            <h1>Home Dashboard Performance</h1>
            { urls.map((item, i) => {
                return <Test key={i} url={item.url} name={item.name} />
            })}
        </div>
    );
};

export default Home;