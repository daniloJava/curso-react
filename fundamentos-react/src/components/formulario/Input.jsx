import React, { useState } from 'react'
import './input.css'

export default props => {
    const [valor, setValor] = useState('Inicial')

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={
                {
                    display: 'flex',
                    flexDirection: 'column'
                }
            }>
                <input value={valor} onChange={(e) => {
                    setValor(e.target.value)
                }}></input>
                <input value={valor} readOnly></input>
                <input value={undefined}></input>
            </div>
        </div>
    )
}