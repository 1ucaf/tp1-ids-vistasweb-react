import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { rootApiPath } from '../../App';

const AltaProducto = (props) => {
    let {idProducto} = useParams("1");
    const [descripcion, setDescripción] = useState();
    const [costo, setCosto] = useState();
    const [margenDeGanancia, setMargenDeGanancia] = useState();
    const [netoGravado, setNetoGravado] = useState();
    const [IVA, setIVA] = useState();
    const [precioFinalVenta, setPrecioFinalVenta] = useState();
    const [selectedRubroId, setSelectedRubroId] = useState("");
    const [selectedMarcaId, setSelectedMarcaId] = useState("");
    const [rubros, setRubros] = useState([]);
    const [marcas, setMarcas] = useState([]);
    
    const containerStyles = {
        padding: "40px",
        borderRadius: "25px",
        margin: "auto",
        maxWidth: "90%",
        backgroundColor: "rgba(255, 255, 255, 0.8)"
    }
    
    useEffect(()=>{
        axios.get(rootApiPath + "productos/?id="+idProducto)
        .then((response)=>{
            console.log("producto: ",response.data);
            setDescripción(response.data.Descripcion);
            setCosto(response.data.Costo);
            setMargenDeGanancia(response.data.MargenDeGanancia);
            setNetoGravado(response.data.NetoGravado);
            setIVA(response.data.IVA);
            setPrecioFinalVenta(response.data.PrecioVenta);
            setSelectedMarcaId(response.data.Marca.Id);
            setSelectedRubroId(response.data.Rubro.Id);
        })
        .catch(error => {
            console.log(error);
        })
        axios.get(rootApiPath + "rubros/lista")
        .then(response=> {
            console.log(response.data);
            setRubros(response.data);
        })
        axios.get(rootApiPath + "marcas/lista")
        .then(response=> {
            console.log(response.data);
            setMarcas(response.data);
        })
        
    }, [])
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
            <select /* defaultValue={selectedRubroId} */ value={selectedRubroId} class="form-select" aria-label="Default select example">
                {
                    rubros.map(rubro => {
                        return (
                            <option value={rubro.Id}>{rubro.Descripcion}</option>
                        )
                    })
                }
            </select>

            <label htmlFor="idProducto"> Marca </label>
            <select /* defaultValue={selectedMarcaId} */ value={selectedMarcaId} class="form-select" aria-label="Default select example">
                {
                    marcas.map(marca => {
                        return (
                            <option value={marca.Id}>{marca.Descripcion}</option>
                        )
                    })
                }
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
