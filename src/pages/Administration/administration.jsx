import ImgCarrinho from '../../images/main/carrinho-de-compras.png'
import Button from '../../components/button/Index'
import Style from './administration.module.css'
import { useNavigate } from 'react-router-dom';
import Tabela from '../../components/tabela/Index'
import { useState } from 'react';
import Modal from '../../components/modal/Modal';

/* Variável Global para o tipo de cadastramento ou modificação de dados */
let tipoDeModal = "";

export default function Administration(){

    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        quantidade: '',
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
            setFormData({nome: '', descricao: '', quantidade: ''});

        }catch(Error){
            console.log("Erro ao Enviar dados:", Error.message);
        }
        
    };

    const cadastramento = () => {
        tipoDeModal = "Cadastramento ";
        setIsModalOpen(true);

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
            <Modal isOpen={isModalOpen} title={tipoDeModal} onClose={() => setIsModalOpen(false)}>
                <form onSubmit={handleSubmit} >
                    <div className={Style.modal_overlay_form}>
                        <label htmlFor="">
                            Nome do Produto*<input type="text" name="nome" placeholder='Sabão' value={formData.nome} onChange={handleChange} required/>
                        </label>
                        
                        <label htmlFor="">
                            Descriçao*<input type="text" name="descricao" placeholder='Uso geral ...' value={formData.descricao} onChange={handleChange} required/>
                        </label>
                        
                        <label htmlFor="">
                            Quantidade*<input type="number" name='quantidade' placeholder='25' value={formData.quantidade} onChange={handleChange} min="1" required/>
                        </label>
                    </div>
                    <div className={Style.modal_overlay_form_button}>
                        <Button type="submit" title="Salvar"/>
                        <Button onClick={() => fechamentoModal()} title="Cancelar"></Button>
                    </div>
                </form>
            </Modal>

        </div>
    )
}