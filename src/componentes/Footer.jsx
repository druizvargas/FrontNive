import React from "react";
import software from '../Imagenes/software.jpg'



const CompFooter = () => {
    return (

        <div>
            <div className="card-body">
                <h5 className="card-titel">Direccion calle 53 # 15-07 </h5>
                <p className="card-text">Correo gestionsoft@gmail.com - telefonos(601)3547823 -3204557489</p>
                <img src={software} className="App-logo1" alt="logo"/>
               
            </div>
            <div className="card-footer text-muted">Horario Lunes-viernes 8am-5pm </div>
        </div>

    )
}

export default CompFooter;