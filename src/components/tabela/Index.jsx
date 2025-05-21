import Style from './Index.module.css'
import Button from '../button/Index'
import { useEffect, useState} from 'react';

export default function Index({reload}){
    const [dados, setDados] = useState([]);
    const [erro, setErro] = useState(null);
    const [produtos, setProdutos] = useState([]);

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
        return alert(`Erro: ${erro}`);
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
                    {dados.map(item => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td>{item.descricao}</td>
                            <td>{item.quantidade}</td>
                        <td ><div className={Style.Button}><Button title="Editar"/><Button title="Excluir" onClick={() => deleteDados(item.id)}/></div></td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}