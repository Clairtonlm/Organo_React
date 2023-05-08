import "./BotaoChildren.css"
/**Botao children é uma outra forma de escrever
 * colocando o texto como no html
 * <botao>
 *      escreve qualaquer coisa aqui
 * </botao>
 */
const BotaoChildren = (props)=>{
    return(
        <div>
            <button className='botao'>{props.children}</button>
        </div>
    )
}
export default BotaoChildren;