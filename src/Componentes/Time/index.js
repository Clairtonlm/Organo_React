import Colaborador from '../Colaborador';
import'./Time.css'

const Time = (propos)=>{
    const css = { backgroundColor: propos.corSecundaria}
    return (
        <section className='time' style={css}>
            <h3 style={{ borderColor: propos.corprimaria}}>{propos.nome}</h3>
            <Colaborador/>
            <Colaborador/>
        </section>
    )
}
export default Time;