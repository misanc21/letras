import React, { useState } from 'react';

const Formulario = ( { setBusquedaLetra } ) => {

    const [busqueda, setBusqueda] = useState({
        artista:'',
        cancion:''
    })
    const [error, setError] = useState(false)
    
    const actualizarState = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] :e.target.value
        })
    }

    const buscarInfo = e => {
        e.preventDefault();
        if (artista.trim() === '' || cancion.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        setBusquedaLetra(busqueda)

    }

    const {artista, cancion} = busqueda
    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={buscarInfo}
                    >
                        <fieldset>
                            <legend className="text-center">
                                Buscador de canciones
                            </legend>
                            <div className="row">
                                <div className="col col-12 col-md-5">
                                    <div className="form-group">
                                        <label forhtml="artista" id="lbl-artista">Artista</label>
                                        <input
                                            aria-labelledby="lbl-artista"
                                            id="artista"
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre del artista"
                                            onChange = {actualizarState}
                                            value = {artista} 
                                        />
                                    </div>
                                </div>
                                <div className="col col-12 col-md-5">
                                    <div className="form-group">
                                        <label forhtml="cancion" id="lbl-cancion">Cancion</label>
                                        <input
                                            aria-labelledby="lbl-cancion"
                                            id="cancion"
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre de canción"
                                            onChange = {actualizarState}
                                            value = {cancion} 
                                        />
                                    </div>
                                </div>
                                <div className="col col-12 col-md-2 align-self-end">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary form-control">
                                            Buscar
                                        </button>
                                    </div>
                                </div>
                                {error ? <p className="col-12 alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;