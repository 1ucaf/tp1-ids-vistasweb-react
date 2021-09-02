import React from 'react'
import Table from '../../components/Table/Table'

const data = [
    {
        name: "José",
        lastName: "perez",
        userId: "usuario1",
    },
    {
        name: "juan",
        lastName: "gomez",
        userId: "usuario2",
    },
    {
        name: "esteban",
        lastName: "gutierrez",
        userId: "usuario3",
    },
    ]
const columns = [
    {
        key: "userId",
        text: "usuario",
    },
    {
        key: "name",
        text: "nombre",
    },
    {
        key: "lastName",
        text: "apellido",
    },
]

const containerStyles = {
    padding: "40px",
    borderRadius: "25px",
    margin: "auto",
    maxWidth: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.8)"
}

const Usuarios = () => {
    return (
        <div style={containerStyles}>
            <h1>Usuarios</h1>
            <Table data={data} columns={columns}></Table>
        </div>
    )
}

export default Usuarios
