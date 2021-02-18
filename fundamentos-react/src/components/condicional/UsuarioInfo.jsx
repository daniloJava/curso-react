import React from 'react'
import IF, { Else } from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <IF test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>
                <Else>
                Seja bem vindo <strong>Jovem</strong>
                </Else>
            </IF>
        </div>
    )
}