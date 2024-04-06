import React from 'react';
import './macroCount.css'

function Macro({name, data, image, unit}) {
    
    return (
        <section className='macro'>
            <img src={image} alt={name} />
            <div className='macro-info'>
                <p className='macro-info_data'>{data}{unit}</p>
                <p className='macro-info_text'>{name}</p>
            </div>
        </section>
    )
}

export default Macro