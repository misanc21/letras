import React, { Fragment, useState, useEffect } from 'react';
import axios from  'axios'

import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
import Informacion from './components/Informacion'

function App() {
  const [busquedaLetra, setBusquedaLetra] = useState({})
  const [letra, setLetra] = useState('')
  const [info, setInfo] = useState({})
  const [error, setError] = useState(false)
  

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return

    const consultarapis = async () => {
        const { artista, cancion} = busquedaLetra
        setError(false)

        await Promise.all([
          axios.get(`https://api.lyrics.ovh/v1/${artista}/${cancion}`),
          axios.get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`)
        ])
        .then ( values =>{
            const letra = values[0]
            const informacion = values[1]
            setLetra(letra.data.lyrics)
            setInfo(informacion.data.artists[0])
          }
        )
        .catch(e => setError(true))
    }

    consultarapis()

  }, [busquedaLetra])


  return (
    <Fragment>
      <Formulario
        setBusquedaLetra = {setBusquedaLetra}
      />
      <div className="container">
        <div className="row mt-3">
          {error ? 
            <Fragment>
              <div className="col 12">
                <p  className="alert alert-dismissible alert-warning">No se encontro la letra, verifica el nombre del artista y cancion</p> 
              </div>
            </Fragment>
            :
            <Fragment>
              <div className="col-md-6 col-sm-12">
                <Informacion
                  info= {info}
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <Cancion
                  letra = {letra}
                />
              </div>
            </Fragment>
          }
        </div>
      </div>
    </Fragment>
  );
}

export default App;
