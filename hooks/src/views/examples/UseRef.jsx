import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = (s1, s2) => {
    return [...s1].map((e, i) => {
        return `${e}${s2[i] || ""}`
    }).join("")
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    const count = useRef(0)
    const myInputRef1 = useRef(null)
    const myInputRef2 = useRef(null)

    useEffect(() => {
        count.current++
        myInputRef2.current.focus()
    }, [value1])
    useEffect(() => {
        count.current++
        myInputRef1.current.focus()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: {merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>

                </div>
                <input type="text" className="input"
                    ref={myInputRef1}
                    value={value1} onChange={e => setValue1(e.target.value)} />
            </div>
            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <input type="text" className="input"
                    ref={myInputRef2}
                    value={value2} onChange={e => setValue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
