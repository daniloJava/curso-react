import './App.css'
import React from 'react'

import Megasena from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default function App() {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#13 Megasena" color="#85144b">
                    <Megasena></Megasena>
                </Card>
                <Card titulo="#12 Contador" color="#DDDDDD">
                    <Contador numeroInicial={10}></Contador>
                </Card>
                <Card titulo="#11 Componente Controlado (input)" color="#B10DC9">
                    <Input></Input>
                </Card>
                <Card titulo="#10 Comunicacao Indireta" color="#006400">
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo="#09 Comunicacao Direta" color="#2F4F4F">
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="#08 Renderizacao Condicional" color="#8A2BE2">
                    <ParOuImpar numero={20}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Danilo' }}></UsuarioInfo>
                </Card>
                <Card titulo="#07 Desafios Produtos" color="#FF00FF">
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo="#06 Lista Repetiçao" color="#00FF00">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#05 Componente com filhos" color="#FF7F50">
                    <Familia sobrenome="Oliveira">
                        <FamiliaMembro nome="Pedro"></FamiliaMembro>
                        <FamiliaMembro nome="Ana" ></FamiliaMembro>
                        <FamiliaMembro nome="Gustavo"></FamiliaMembro>

                    </Familia>
                </Card>
                <Card titulo="#04 Desafio Aleatorio" color="#080">
                    <Aleatorio min={1} max={60}></Aleatorio>
                </Card>
                <Card titulo="#03 Fragmento" color="#0345">
                    <Fragmento></Fragmento>
                </Card>
                <Card titulo="#02 Com parametro " color="#089">
                    <ComParametro
                        titulo="Segundo Componente"
                        subtitulo="Muito Legal4">
                    </ComParametro>
                </Card>
                <Card titulo="#01 Primeiro">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}
