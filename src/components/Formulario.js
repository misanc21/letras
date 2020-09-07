import React from 'react';

const Formulario = () => {
    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">
                                Buscador de canciones
                            </legend>
                            <div className="row">
                                <div className="col col-12 col-md-5">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre del artista"
                                        />
                                    </div>
                                </div>
                                <div className="col col-12 col-md-5">
                                    <div className="form-group">
                                        <label>Cancion</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre de canción"
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
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;