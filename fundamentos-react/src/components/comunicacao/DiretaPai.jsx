import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho texto="Filho 1 " numero={20} bool={false}></DiretaFilho>
            <DiretaFilho texto="Filho 2 " numero={17} bool={true}></DiretaFilho>
        </div>
    )
}