import style from './Index.module.css'

export default function Index({title, onClick}){

    return(
        <>
            <button className={style.button} onClick={onClick}>{title}</button>
        </>
    )
}