import Button from "../button/Index"
import Style from "./index.module.css"

export default function Index(){

    return(
        <header className={Style.header}>
            <nav>
                <Button title="Ver Produtos"/>
            </nav>
        </header>
    )


}