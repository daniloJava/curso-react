import './Sorteio.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Sorteio = props => {
    const { min, max } = props.numeros
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="Sorteio de Numeros" purple>
            <div className="Media">
                <span>Sorteio</span>
                <strong>{aleatorio}</strong>
            </div>
        </Card>
    )
}


const mapStateToProps = state => {
    return {
        numeros: state.numeros,
    }
}

export default connect(mapStateToProps)(Sorteio)