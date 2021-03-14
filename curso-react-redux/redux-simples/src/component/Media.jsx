import './Media.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const Media = props => {
    const { min, max } = props.numeros
    return (
        <Card title="Media de Numeros" green>
            <div className="Media">
                <span>Resultado </span>
                <strong>{(min + max) / 2}</strong>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        numeros: state.numeros,
    }
}

export default connect(mapStateToProps)(Media)