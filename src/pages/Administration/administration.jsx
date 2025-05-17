import Header from '../../components/header/Index';
import ImgCarrinho from '../../images/main/carrinho-de-compras.png'
import Button from '../../components/button/Index'

export default function administration(){

    return(
        <>
            <header>
                <nav>
                    <div>
                        <figure>
                            <img src={ImgCarrinho} alt="Carinho" />
                        </figure>
                        <div>
                            <p>Nome da Loja</p>
                        </div>
                    </div>
                    <div>
                        <Button title="Home"/>
                        <Button title="Estoque"/>
                    </div>

                </nav>
            </header>
            <main>
                <section>
                    <h2>Conteúdo</h2>
                </section>
            </main>
            <footer>
                <div>
                    <h2>Atakado</h2>
                </div>
            </footer>
        </>
    )
}