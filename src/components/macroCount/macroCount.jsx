import React, { PureComponent, useEffect, useState } from 'react';
import { Calories, Proteines, Glucides, Lipides } from '../../icons';
import './macroCount.css'

function Macro({name, data}) {
    const [image, setImage] = useState(null);
    const [unit, setUnit] = useState(null)
    
    useEffect(()=>{
        switch (name) {
            case 'Calories':
                setImage(Calories)
                setUnit('kCal')
            break;
            case 'Proteines':
                setImage(Proteines)
                setUnit('g')
            break;
            case 'Glucides':
                setImage(Glucides)
                setUnit('g')
            break;
            case 'Lipides':
                setImage(Lipides)
                setUnit('g')
            break;
            default:
                break;
        }
    },[name])
    console.log(image);
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