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
        id: null,
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

        
        try{
            const method = formData.id? 'PUT': 'POST';
            const url = formData.id ? `http://localhost:8080/produtos/update/${formData.id}` 
            : 'http://localhost:8080/produtos/save';
        
            const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if(!response.ok){
                throw new Error('Erro ao Salvar Produto');
            }

            const resultado = await response.json();
            alert(formData.id ?'Produto Editado com sucesso':'Produto Salvo com Sucesso!');
            setReloadTabela(prev => !prev);
            formData.id ? setIsModalOpen(false): setFormData({id: null, nome: '', descricao: '', quantidade: ''});
            
            
            

        }catch(Error){
            console.log("Erro ao Enviar dados:", Error.message);
        }
        
    };

    const cadastramento = () => {
        tipoDeModal = "Cadastramento ";
        setFormData({id: null, nome: '', descricao: '', quantidade: ''});
        setIsModalOpen(true);

    }

    const handleClick = (produto) => {
        tipoDeModal = "Edição ";
        setFormData({
            id: produto.id,
            nome: produto.nome,
            descricao: produto.descricao,
            quantidade: produto.quantidade,
        })
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
                        <figure className={Style.figure} onClick={goHome}>
                            <img className={Style.imagem} src={ImgCarrinho} alt="Carinho"/>
                        </figure>
                        <div className={Style.store}>
                            <p>Atakado</p>
                        </div>
                    </div>
                    <div className={Style.service}>
                        <p>Serviços</p>
                    </div>
                    <div className={Style.button}>
                        <Button title="Cadastrar" onClick={() => cadastramento()}/>
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
                    <Tabela reload={reloadTabela} edite={handleClick}/>
                </section>
                
            </main>
            <Modal isOpen={isModalOpen} title={tipoDeModal} onClose={() => setIsModalOpen(false)}>
                <form onSubmit={handleSubmit} >
                    <div className={Style.modal_overlay_form}>
                        <label htmlFor="">
                            Nome do Produto*
                            <input 
                            type="text" 
                            name="nome" 
                            placeholder='Sabão' 
                            value={formData.nome} 
                            onChange={handleChange} 
                            maxLength='50' 
                            required/>
                        </label>
                        
                        <label htmlFor="">
                            Descriçao*<input type="text" 
                            name="descricao" 
                            placeholder='Uso geral ...' 
                            value={formData.descricao} 
                            onChange={handleChange} 
                            maxLength='100' 
                            required/>
                        </label>
                        
                        <label htmlFor="">
                            Quantidade*<input type="number" 
                            name='quantidade' 
                            placeholder='25' 
                            value={formData.quantidade}
                            onChange={handleChange} 
                            min='1' max='10000'
                            required/>
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