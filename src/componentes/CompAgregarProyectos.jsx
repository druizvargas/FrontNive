import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const URL = 'https://backennivel.onrender.com/api/proyectos/';

const CompAgregarProyectos = () => {

    const [proyecto, setProyecto] = useState('');
    const [gestion, setGestion] = useState('');
    const [novedades, setNovedades] = useState('');
    const [inicio, setInicio] = useState('');
    const navigate = useNavigate();


    //funcion guardar
    const guardarProyectos = async (e) => {
        e.preventDefault();
        await axios.post(URL, {
            proyecto: proyecto,
            gestion: gestion,
            novedades: novedades,
            inicio: inicio,

        })
        navigate('/proyectos');

    }
    return (

        <div>
            <h3> Formulario Guardar Proyectos </h3>
            <form onSubmit={guardarProyectos}>

                <div className="mb-3">
                    <label className="form-label"> Proyecto </label>
                    <input value={proyecto} onChange={(e) => setProyecto(e.target.value)}
                        type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label"> Gestion </label>
                    <input value={gestion} onChange={(e) => setGestion(e.target.value)}
                        type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label"> Novedades </label>
                    <input value={novedades} onChange={(e) => setNovedades(e.target.value)}
                        type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label"> Inicio </label>
                    <input value={inicio} onChange={(e) => setInicio(e.target.value)}
                        type="date" className="form-control" />
                </div>


                <button type="submit" className="btn btn-primary">Guardar</button>



            </form>
        </div>

    )

}

export default CompAgregarProyectos;