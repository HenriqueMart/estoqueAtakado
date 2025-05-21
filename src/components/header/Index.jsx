import Button from "../button/Index"
import Style from "./index.module.css"
import { useNavigate} from 'react-router-dom';

export default function Index(){

  const navigate = useNavigate();

  const goAdministration = () => {
    navigate('/Administration');
  };
    return(
        <header className={Style.header}>
            <nav>
                <Button title="Ver Produtos" onClick={goAdministration}/>
            </nav>
        </header>
    )
}