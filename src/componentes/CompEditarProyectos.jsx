import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL = 'https://backennivel.onrender.com/api/proyectos/';

const CompEditarProyectos = () => {

    const [proyecto, setProyecto] = useState('');
    const [gestion, setGestion] = useState('');
    const [novedades, setNovedades] = useState('');
    const [inicio, setInicio] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();


    //funcion modificar
    const CompEditarProyectos = async (e) => {
        e.preventDefault();
        await axios.put(`${URL}${id}`, {
            proyecto: proyecto,gestion: gestion,novedades: novedades,
            inicio: inicio,

        })
        navigate('/proyectos');

    }
    useEffect(() =>{
        getProyectos();
    },[]);

    const getProyectos = async() =>{
        const res = await axios.get(`${URL}${id}`)
        setProyecto(res.data.proyecto)
        setGestion(res.data.gestion)
        setNovedades(res.data.novedades)
        setInicio(res.data.inicio)
        
    }
    return (

        <div>
            <h3> Formulario Editar Proyectos </h3>
            <form onSubmit={CompEditarProyectos}>

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
                        type="text" className="form-control" />
                </div>


                <button type="submit" className="btn btn-primary">Editar</button>



            </form>
        </div>

    )

}

export default CompEditarProyectos;