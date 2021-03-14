import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

const Intervalo = props => {
    const { min, max } = props.numeros

    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo</strong>
                    <input type="number" value={min}
                        onChange={e => props.alterarMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Maximo</strong>
                    <input type="number" value={max}
                        onChange={e => props.alterarMaximo(+e.target.value)} />
                </span>

            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        numeros: state.numeros,
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp)(Intervalo)