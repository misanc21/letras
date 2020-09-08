import React from 'react';

const Informacion = ( {info} ) => {
    if (Object.keys(info).length === 0) return null;

    const {strArtistThumb, strGenre, strBiographyES, strBiographyEN} = info
    return (  
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion Artista
            </div>
            <div className="car-body">
                <img src={strArtistThumb} alt="artista"/>
                <p className="card-text">{strGenre}</p>
                <h2 className="card-text">Biografia</h2>
                <p className="card-text">{strBiographyES === null ? strBiographyEN : strBiographyES}</p>
            </div>
        </div>
    );
}
 
export default Informacion;