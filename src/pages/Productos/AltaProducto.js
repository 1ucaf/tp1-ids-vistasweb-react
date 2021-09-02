import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const AltaProducto = (props) => {
    let {idProducto} = useParams("1");
    const [descripcion, setDescripción] = useState();
    const [costo, setCosto] = useState();
    const [margenDeGanancia, setMargenDeGanancia] = useState();
    const [netoGravado, setNetoGravado] = useState();
    const [IVA, setIVA] = useState();
    const [precioFinalVenta, setPrecioFinalVenta] = useState();
    const containerStyles = {
        padding: "40px",
        borderRadius: "25px",
        margin: "auto",
        maxWidth: "90%",
        backgroundColor: "rgba(255, 255, 255, 0.8)"
    }
    return (
        <div style={containerStyles}>
            {props.isNew?(
                <h1> Alta de Producto </h1>
            ) : ( <>
                <h1> Editar Producto </h1>
                <label htmlFor="idProducto"> ID de Producto</label>
                <input type="text" id="idProducto" className="form-control" value={idProducto} disabled/>
            </>)
            }

            <label htmlFor="idProducto"> Descripción </label>
            <input type="text" id="idProducto" className="form-control" value={descripcion} onChange={(e)=>{setDescripción(e.target.value)}}/>

            <label htmlFor="idProducto"> Costo </label>
            <input type="text" id="idProducto" className="form-control" value={costo} onChange={(e)=>{setCosto(e.target.value)}}/>

            <label htmlFor="idProducto"> Margen De Ganancia </label>
            <input type="text" id="idProducto" className="form-control" value={margenDeGanancia} onChange={(e)=>{setMargenDeGanancia(e.target.value)}}/>
            
            <label htmlFor="idProducto"> Rubro </label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Calzados Deportivos</option>
                <option value="1">Prendas de Vestir</option>
                <option value="2">Urbano</option>
                <option value="3">Camisas</option>
            </select>

            <label htmlFor="idProducto"> Marca </label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Adidas</option>
                <option value="1">Nike</option>
                <option value="2">Le Coq</option>
                <option value="3">Puma</option>
            </select>

            <label htmlFor="idProducto"> Neto Gravado </label>
            <input type="text" id="idProducto" className="form-control" value={netoGravado} onChange={(e)=>{setNetoGravado(e.target.value)}} disabled/>

            <label htmlFor="idProducto"> IVA </label>
            <input type="text" id="idProducto" className="form-control" value={IVA} onChange={(e)=>{setIVA(e.target.value)}} disabled/>

            <label htmlFor="idProducto"> Precio Final de Venta </label>
            <input type="text" id="idProducto" className="form-control" value={precioFinalVenta} onChange={(e)=>{setPrecioFinalVenta(e.target.value)}}/>

            <div style={{paddingTop: "20px", paddingBottom: "30px"}}>
                <button style={{float: "right"}} onClick={(e)=>{e.preventDefault(); console.log("login")}} className="btn btn-primary">Guardar</button>
            </div>
        </div>
    )
}

export default AltaProducto
