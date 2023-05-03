import React, { useState } from 'react';
import { useEffect } from 'react';
import ChiefCard from '../ChiefCard/ChiefCard';

const Chiefs = () => {
    const [chiefs, setChiefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chiefs')
            .then(res => res.json())
            .then(data => setChiefs(data))
    }, [])

    return (
        <div className='container'>
            <h2>Total Chiefs:{chiefs.length}</h2>
            <div className='row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {
                    chiefs.map(chief => <ChiefCard
                        key={chief.id}
                        chief={chief}
                    ></ChiefCard>)
                }
            </div>
        </div>
    );
};

export default Chiefs;