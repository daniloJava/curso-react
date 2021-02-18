import React, { useState } from 'react'
import './Mega.css'

export default props => {


    function gerarNumeros(qtd) {
        const numeros = Array(qtd)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            return [ ...nums, novoNumero]
        }, [])
        .sort((n1, n2) => n1 - n2)
        return numeros
    }

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const [numeros, setNumeros] = useState(Array(qtde).fill(0))

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="megaForm">Qtde de Numeros</label>
                <input id="megaForm" min="6" max="15" type="number" value={qtde} onChange={e => setQtde(+e.target.value)}></input>
            </div>
            <button onClick={e => setNumeros(gerarNumeros(qtde))}>Gerar Numeros</button>
        </div>
    )
}