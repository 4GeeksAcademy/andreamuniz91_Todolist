import React, { useState } from "react";

export const Formulario = () => {
    const [listaCompra, setListaCompra] = useState('')
    const [arrayCompra, setArraycompra] = useState([])
    

    const handleChange = (event) => {
        setListaCompra(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (listaCompra.trim() !== '') {
            setArraycompra([...arrayCompra, listaCompra]);
        }
        setListaCompra('');
    }

const handleReset = (event) => {
    setArraycompra([]);
   
  };

  const delate = (item) => {
    setArraycompra(arrayCompra.filter((element) => element !== item ))
  }
    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="listacompra" className="form-label h1 text-white"><i className="fas fa-clipboard-list">
                        </i>Lista de la compra</label>
                    <input type="text" className="form-control" id="listacompra" value={listaCompra} 
                    aria-describedby="emailHelp" placeholder="Escribe un producto" onChange={handleChange} />
                </div>
                <ul>
                    {arrayCompra.map((item, index) => (
                        <li className= "icono fs-5"  key={index}>{item}
                        <span onClick={() => delate (item)}>
                            <i className="fas fa-trash-alt text-danger float-end p-2 "></i>
                        </span>
                        
                        </li>
                    ))}
                    
                </ul>
                <div id="total" className="form-text text-white fs-5">Productos: {arrayCompra.length}</div>
                <button type="reset" onClick={handleReset}className="btn btn-primary">Borrar lista</button>
            </form>
        </div>
    )
}