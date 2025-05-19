import Header from '../../components/header/Index';
import ImgCarrinho from '../../images/main/carrinho-de-compras.png'
import Button from '../../components/button/Index'
import Style from './administration.module.css'
import { useNavigate } from 'react-router-dom';

export default function Administration(){

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return(
        <div className={Style.container}>
            <header className={Style.header}>
                <nav className={Style.nav}>
                    <div className={Style.information}>
                        <figure className={Style.figure}>
                            <img className={Style.imagem} src={ImgCarrinho} alt="Carinho" />
                        </figure>
                        <div className={Style.store}>
                            <p>Atakado</p>
                        </div>
                    </div>
                    <div className={Style.service}>
                        <p>Serviços</p>
                    </div>
                    <div className={Style.button}>
                        <Button title="Home" onClick={goHome}/>
                        <Button title="Estoque"/>
                    </div>
                </nav>
                <footer className={Style.footer}>
                    <div >
                        <h2 className={Style.footer_titule}>Atakado</h2>
                    </div>
                </footer>
            </header>
            <main className={Style.main}>
                <section>
                    <h2>Conteúdo</h2>
                </section>
            </main>
        </div>
    )
}