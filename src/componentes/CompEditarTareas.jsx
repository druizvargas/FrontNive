import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL = 'https://backennivel.onrender.com/api/tareas/';

const CompEditarTareas = () => {

    const [nombre, setNombre] = useState('');
    const [responsable, setResponsable] = useState('');
    const [fecha, setFecha] = useState('');
    const [comentarios, setComentarios] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();


    //funcion modificar
    const editarTareas = async (e) => {
        e.preventDefault();
        await axios.put(`${URL}${id}`, {
            nombre: nombre,responsable: responsable,fecha: fecha,
            comentarios: comentarios,

        })
        navigate('/tareas');

    }
    useEffect(() =>{
        getTareas();
    },[]);

    const getTareas = async() =>{
        const res = await axios.get(`${URL}${id}`)
        setNombre(res.data.nombre)
        setResponsable(res.data.responsable)
        setFecha(res.data.fecha)
        setComentarios(res.data.comentarios)
        
    }
    return (

        <div>
            <h3> Formulario Editar Tareas </h3>
            <form onSubmit={editarTareas}>

                <div className="mb-3">
                    <label className="form-label"> Nombre </label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)}
                        type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label"> Responsable </label>
                    <input value={responsable} onChange={(e) => setResponsable(e.target.value)}
                        type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label"> Fecha </label>
                    <input value={fecha} onChange={(e) => setFecha(e.target.value)}
                        type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label"> Comentarios </label>
                    <input value={comentarios} onChange={(e) => setComentarios(e.target.value)}
                        type="text" className="form-control" />
                </div>


                <button type="submit" className="btn btn-primary">Editar</button>



            </form>
        </div>

    )

}

export default CompEditarTareas;