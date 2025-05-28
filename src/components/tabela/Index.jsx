import Style from './Index.module.css'
import Button from '../button/Index'
import { useEffect, useState} from 'react';

export default function Index({reload, edite}){
    const [dados, setDados] = useState([]);
    const [erro, setErro] = useState(null);
    const [itensPerPage, setItensPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);


    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const dadosPaginados = dados.slice(startIndex, endIndex);
    const pages = Math.ceil(dados.length / itensPerPage);
    
    /*Realizar o GET permitindo que outras funcionalidade possa solicitar atualização */
    const buscarDados = () => {
        fetch("http://localhost:8080/produtos/findall").then(response => {
            if(!response.ok){
                throw new Error("Erro ao Buscar os Dados.");
            }
            return response.json();
        }).then(data => setDados(data.content)).catch(error => setErro(error.message));
    }
    /*Atualizar os dados uma vez */
    useEffect(() => {
        buscarDados();
        setCurrentPage(0)//Voltar para primeira Página
    }, [reload]);

    function deleteDados(id){
        fetch(`http://localhost:8080/produtos/delete/${id}`, {
            method: 'DELETE',
        }).then(response => response.json()).then(data => {
            buscarDados();
            alert("Excluído com sucesso:", data);
        }).catch(error => setErro(error.message))
    }

    if(erro){
        return (
            <div>
                <p colSpan="4" style={{ textAlign: 'center', color: 'red' }}>
                    Erro apresentado: ${erro}<br/>Entre em contato com o suporte!
                </p>
            </div>
        )
    }
    return(
        <>
            <div className={Style.container}>
            <table className={Style.tabela}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Modificar</th>
                    </tr>
                </thead>
                <tbody>
                    { dadosPaginados.length > 0 ? (
                        dadosPaginados.map(item => (
                            <tr key={item.id}>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td>{item.quantidade}</td>
                                <td>
                                    <div className={Style.Button}>
                                        <Button title="Editar" onClick={() => edite(item)} />
                                        <Button title="Excluir" onClick={() => deleteDados(item.id)} />
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>
                                Nenhum produto cadastrado!
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        <div className={Style.numberPages}>
            {Array.from({ length: pages }, (_, index) => (
                <Button title={index + 1}
                key={index} 
                onClick={() => setCurrentPage(index)}
                >
                </Button>
            ))}
        </div>
        </>
    );
}