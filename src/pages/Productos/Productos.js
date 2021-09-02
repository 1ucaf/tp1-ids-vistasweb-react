import Alert from '@material-ui/lab/Alert'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { rootPath } from '../../App'
import Table from '../../components/Table/Table'

const containerStyles = {
    padding: "40px",
    borderRadius: "25px",
    margin: "auto",
    maxWidth: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.8)"
}

const data = [
    {
        id: "1",
        description: "Zapatilla Nike",
        price: "$ 10000",
    },
    {
        id: "2",
        description: "Campera Adidas",
        price: "$ 6000",
    },
    {
        id: "3",
        description: "Camisa Polo",
        price: "$ 5000",
    },
    ]
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
    }
]


const Productos = () => {
    let history = useHistory();
    const [selectedProductId, setSelectedProductId] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const selectHandler = (id) => {
        console.log(id);
        setSelectedProductId(id);
    }
    
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
