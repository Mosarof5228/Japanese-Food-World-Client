import React, { useState } from 'react';
import { useEffect } from 'react';
import './Chiefs.css'
import ChiefCard from '../ChiefCard/ChiefCard';

const Chiefs = () => {
    const [chiefs, setChiefs] = useState([]);
    useEffect(() => {
        fetch('https://japanese-food-world-server-mosarof5228.vercel.app/chiefs')
            .then(res => res.json())
            .then(data => setChiefs(data))
    }, [])

    return (
        <div>
            <h3 className='text-center fs-2 fw-bold'>All Japanese Chief List</h3>
            <div className='container mt-4'>

                <div className='row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3 background-color-card'>
                    {
                        chiefs.map(chief => <ChiefCard
                            key={chief.id}
                            chief={chief}
                        ></ChiefCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Chiefs;