import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";

//Style
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
    const aoSalvar = (evento)=>{
        evento.preventDefault();
        console.log("Formulário foi enviado com sucesso")
    }

    return(
        <section className="formulario">
            <form onSubmit ={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao texto="Criar Card"/>
            
            </form>
        </section>
    )
}
export default Formulario;