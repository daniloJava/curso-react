import React from 'react'

import { useParams } from "react-router-dom";

const Param = props => {
    const { id } = useParams()
    return (
    <div className="Param">
        <h1>Param Componente</h1>
        <p>Vslor {id}</p>
    </div>
)}

export default Param