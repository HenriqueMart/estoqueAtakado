import style from './Index.module.css'
import carrinho from '../../images/main/carrinho-de-compras.png'

export default function Index(){

    return(
        <main className={style.main}>
            <section className={style.section}>
                <article className={style.article}>
                    <div>
                        <h2 className={style.h1}>Estoquista <br/>Atakado</h2>
                    </div>
                    <div className={style.article_Titulo2}>
                        <h3>Comércio LTDA</h3>
                    </div>  
                </article>
                <figure className={style.figure}>
                    <img className={style.imagens} src={carrinho} alt="Carrinho de Supermercado" />
                </figure>
            </section>
        </main>

    );
}