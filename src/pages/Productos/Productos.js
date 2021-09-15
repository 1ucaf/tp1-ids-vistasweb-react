import Alert from '@material-ui/lab/Alert'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { rootApiPath, rootPath } from '../../App'
import Table from '../../components/Table/Table';
import axios from 'axios';

const containerStyles = {
    padding: "40px",
    borderRadius: "25px",
    margin: "auto",
    maxWidth: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.8)"
}

// const data = [
//     {
//         id: "1",
//         description: "Zapatilla Nike",
//         price: "$ 10000",
//     },
//     {
//         id: "2",
//         description: "Campera Adidas",
//         price: "$ 6000",
//     },
//     {
//         id: "3",
//         description: "Camisa Polo",
//         price: "$ 5000",
//     },
// ]
const columns = [
    {
        key: "id",
        text: "id",
    },
    {
        key: "description",
        text: "descripción",
    },
    {
        key: "price",
        text: "Precio",
    },
    {
        key: "marca",
        text: "Marca",
    }
]


const Productos = () => {
    let history = useHistory();
    const [data, setData] = useState();
    const [selectedProductId, setSelectedProductId] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const selectHandler = (id) => {
        console.log(id);
        setSelectedProductId(id);
    }

    useEffect(()=>{
        axios.get(rootApiPath + "productos/lista")
        .then((response)=>{
            console.log("productos que llegan de la api: ",response.data);
            const arrayAux = response.data.map((producto)=>{
                return {
                    id: producto.CodigoDeBarra,
                    description: producto.Descripcion,
                    price: producto.PrecioVenta,
                    marca: producto.Marca.Descripcion,
                }
            })
            setData([...arrayAux]);
        })
    }, [])

    const editarProducto = (e)=>{
        e.preventDefault();
        if(selectedProductId)
            history.push(rootPath+"/productos/alta/"+selectedProductId)
        else
            setErrorMessage("Error! Debe seleccionar un producto");
    }
    return (
        <div style={containerStyles}>
            { errorMessage? <Alert severity="error" onClose={() => {setErrorMessage(undefined)}}>{errorMessage}</Alert> : <></>}
            <h1 style={{display: "inline-block"}}>Productos</h1>
            <button style={{float: "right", marginLeft:"10px"}} onClick={(e)=>{e.preventDefault(); console.log("login")}} className="btn btn-primary">Nuevo</button>
            <button style={{float: "right"}} onClick={editarProducto} className="btn btn-primary">Editar</button>
            <Table data={data} columns={columns} idColumn="id" isSelectTable selectCallBack={selectHandler}></Table>
        </div>
    )
}

export default Productos
