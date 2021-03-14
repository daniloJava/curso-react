import './Soma.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Soma = props => {
    const { min, max } = props.numeros
    return (
        <Card title="Soma de Numeros" blue>
            <div className="Soma">
                <span>Resultado </span>
                <strong>{min + max}</strong>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        numeros: state.numeros,
    }
}

export default connect(mapStateToProps)(Soma)