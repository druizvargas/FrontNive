import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL = 'https://backennivel.onrender.com/api/proyectos/';


const CompMostrarProyectos = () => {

    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        getProyectos();

    }, []);


    const getProyectos = async () => {
        const res = await axios.get(URL)
        setProyectos(res.data);
    }

    const eliminarProyectos = async (id) => {
        await axios.delete(`${URL}${id}`);
        getProyectos();
    }
    return (

        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/proyectos/agregar' className='btn btn-primary nt-2 mb-2'>AGREGAR</Link>
                    <div className="table">
                        <thead className="tablehebg">
                            <tr>
                                <th>Proyecto</th>
                                <th>Gestion</th>
                                <th>Novedades</th>
                                <th>Inicio</th>
                                <th>Acciones </th>
                            </tr>
                        </thead>

                        <tbody>
                            {proyectos.map((tar, index) => (
                                <tr key={index}>
                                    <td>{tar.proyecto}</td>
                                    <td>{tar.gestion}</td>
                                    <td>{tar.novedades}</td>
                                    <td>{tar.inicio}</td>
                                    <td>
                                        <Link to={`/proyectos/editar/${tar._id}`} className='btn btn-success mt-2 mb-2'>Editar</Link>
                                        <button onClick={() => eliminarProyectos(tar._id)} className="btn btn-danger mt-2 mb-2">Eliminar</button>

                                    </td>


                                </tr>
                            ))}

                        </tbody>


                    </div>

                </div>

            </div>
        </div>

    )

}


export default CompMostrarProyectos;