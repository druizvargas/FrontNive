import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const URL = 'https://backennivel.onrender.com/api/tareas/';

const CompAgregarTareas = () => {

    const [nombre, setNombre] = useState('');
    const [responsable, setResponsable] = useState('');
    const [fecha, setFecha] = useState('');
    const [comentarios, setComentarios] = useState('');
    const navigate = useNavigate();


    //funcion Actualizar
    const guardarTareas = async (e) => {
        e.preventDefault();
        await axios.post(URL, {
            nombre: nombre,
            responsable: responsable,
            fecha: fecha,
            comentarios: comentarios,

        })
        navigate('/tareas');

    }
    return (

        <div>
            <h3> Formulario Guardar Tareas </h3>
            <form onSubmit={guardarTareas}>

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
                        type="date" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label"> Comentarios </label>
                    <input value={comentarios} onChange={(e) => setComentarios(e.target.value)}
                        type="text" className="form-control" />
                </div>


                <button type="submit" className="btn btn-primary">Guardar</button>



            </form>
        </div>

    )

}

export default CompAgregarTareas;