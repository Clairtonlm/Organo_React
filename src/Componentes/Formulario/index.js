import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css"

const Formulario = ()=>{

    const times = [
        'Programação',
        'Front-End',
        'Back-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Gestão'
    ]

    return(
        <section className="formulario">
            <form action="">
                <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto label="Cargo" placeholder="Digite seu Cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa label="Time" itens={times}/>
            </form>
        </section>
    )
}
export default Formulario;