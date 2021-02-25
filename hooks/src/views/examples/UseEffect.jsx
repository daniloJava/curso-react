import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const calFactorial = (num) => {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calFactorial(n - 1) * n

}

const calOddEven = (num) => {
    const n = parseInt(num)
    return n % 2 === 1 ?  "Impar" : "Par"
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(0)
    const [factor, setFactor] = useState(1)

    const [oddEven, setOddEven] = useState(1)
    const [status, setStatus] = useState('Impar')

    useEffect(() => setFactor(calFactorial(number)), [number])
    useEffect(() => setStatus(calOddEven(oddEven)), [oddEven])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factor}</span>
                </div>
                <input type="number" className="input" value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <div>
                    <span className="text">Impar Par: </span>
                    <span className="text red">{status}</span>
                </div>
                <input type="number" className="input" value={oddEven}
                onChange={e => setOddEven(e.target.value)} />
            </div>

        </div>
    )
}

export default UseEffect
