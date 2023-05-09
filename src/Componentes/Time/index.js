import'./Time.css'

const Time = (propos)=>{
    const css = { backgroundColor: propos.corSecundaria}
    return (
        <section className='time' style={css}>
            <h3 style={{ borderColor: propos.corprimaria}}>{propos.nome}</h3>
        </section>
    )
}
export default Time;