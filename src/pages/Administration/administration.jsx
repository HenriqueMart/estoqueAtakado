import ImgCarrinho from '../../images/main/carrinho-de-compras.png'
import Button from '../../components/button/Index'
import Style from './administration.module.css'
import { useNavigate } from 'react-router-dom';
import Tabela from '../../components/tabela/Index'
import { useState } from 'react';

function TelaModal({isOpen, onClose, children, title}){
        if(!isOpen) return null;

        return (
           <div className={Style.modal_overlay}> {/* Use Style.modal_overlay */}
            <div className={Style.modal_content}> {/* Use Style.modal_content */}
                <h2>{title}De produtos</h2>
                {children} {/* Renderize a prop children */}
            </div>
        </div>
        ); 
    }


export default function Administration(){

    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        quantidade: 0,
    });
    const [reloadTabela, setReloadTabela] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "quantidade" ? Number(value) : value,
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();


        console.log("Dados enviados:", formData);
        try{
            const response = await fetch('http://localhost:8080/produtos/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if(!response.ok){
                throw new Error('Erro ao Salvar Produto');
            }

            const resultado = await response.json();
            alert('Produto Salvo com Sucesso!');
            setReloadTabela(prev => !prev);
            setFormData({nome: '', descricao: '', quantidade: 0});

        }catch(error){
            console.log("Erro ao Enviar dados:", error.message);
        }
        
    };

    const cadastramento = () => {
        setIsModalOpen(true)

    }

    const fechamentoModal = () => {
        setIsModalOpen(false);
        
    }

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
                        <Button title="Adicionar Produto" onClick={() => cadastramento()}/>
                    </div>
                </nav>
                <footer className={Style.footer}>
                    <div >
                        <h2 className={Style.footer_titule}>Atakado</h2>
                    </div>
                </footer>
            </header>
            <main className={Style.main}>
                <div className={Style.main_background}></div>
                <section>
                    <h2>Estoque</h2>
                    <Tabela reload={reloadTabela}/>
                </section>
                
            </main>
            <TelaModal isOpen={isModalOpen} title="Cadastramento" onClose={() => setIsModalOpen(false)}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">
                            Nome do Produto: <input type="text" name="nome" placeholder='Sabão' value={formData.nome} onChange={handleChange} required/>
                        </label>
                        
                        <label htmlFor="">
                            Descriçao: <input type="text" name="descricao" placeholder='Uso geral ...' value={formData.descricao} onChange={handleChange} required/>
                        </label>
                        
                        <label htmlFor="">
                            Quantidade:<input type="number" name='quantidade' placeholder='25' value={formData.quantidade} onChange={handleChange} required/>
                        </label>
                    </div>
                    <div>
                        <Button type="submit" title="Cadastrar"/>
                        <Button onClick={() => fechamentoModal()} title="Cancelar"></Button>
                    </div>
                </form>
            </TelaModal>

        </div>
    )
}