import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../componente/styles.css'


export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div className='container'>
            <h1>Ejemplo Practico haciendo llamado a la api</h1>

            <hr />


            <button
                className="btn btn-primary boton"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide
            </button>

            <div className='container-left'>

                <h1 className='text-left'>The Breaking Bad API... </h1>
                <p className='text-left1'>Tread Lightly</p>
            </div>
            <div className='container-right'>
                {show && <MultipleCustomHooks />}
            </div>


        </div>
    )
}
