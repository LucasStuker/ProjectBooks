import { livros } from "./dadosUltimosLancamentos"
import { Titulo } from "../Titulo"
import imgAngular from '../../images/livro2.png'
import styled from "styled-components"
import CardRecomenda from "../CardRecomenda"

const UltimosLancamentosContainer = styled.section `
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    transition: 0.4s all;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#EB9B00"
                tamanhoFonte="36px">
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
                <NovosLivrosContainer>
                    {livros.map(livro => (
                    <img src={livro.src} alt="livros"/>
        ))}
                </NovosLivrosContainer>
            <CardRecomenda 
                titulo="talvez você se interesse por"
                subtitulo="Angular 16"
                descricao="Contrua uma aplicação com a plataforma Google"
                img={imgAngular}
            />
        </UltimosLancamentosContainer>     
    )
}

export default UltimosLancamentos