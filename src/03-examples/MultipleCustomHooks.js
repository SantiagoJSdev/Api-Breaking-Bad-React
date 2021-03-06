import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useCouter } from '../hooks/useCouter';



export const MultipleCustomHooks = () => {

    const { counter, increment } = useCouter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];


    return (
        <div className='div-right'>



            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <div>
                            <h1>Frases</h1>
                            <hr />
                            <blockquote className="blockquote text-right quote1">
                                <p className="mb-0"> {quote} </p>
                                <footer className="blockquote-footer"> {author} </footer>
                            </blockquote>
                            <button
                                className="btn btn-primary boton2"
                                onClick={increment}
                            >
                                Siguiente quote
                            </button>
                        </div>
                    )
            }




        </div>
    )
}
